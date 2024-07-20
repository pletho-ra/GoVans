import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export async function loader() {
  const vans = await getVans();
  return vans;
}
const Vans = () => {
  // const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const vans = useLoaderData();

  // useEffect(() => {
  //   fetch("/api/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  // filter the based on the type
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vansElements = displayedVans.map((v) => (
    <div key={v.id} className="van-title">
      <Link
        to={v.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      >
        <img className="image-van" src={v.imageUrl} alt={v.name} />
        <div className="van-info">
          <h3> {v.name} </h3>
          <p>
            ${v.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${v.type} selected`}>{v.type}</i>
      </Link>
    </div>
  ));
  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className={`van-type`}
          >
            Clear
          </button>
        ) : null}
      </div>
      <div className="van-list">{vansElements}</div>
    </div>
  );
};

export default Vans;
