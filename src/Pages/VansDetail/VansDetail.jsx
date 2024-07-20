import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VansDetail = () => {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);

  console.log(location);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr;
        <span> Back to {type} Vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt="vanImage" />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this Van</button>
        </div>
      ) : (
        <h2> Loading....</h2>
      )}
    </div>
  );
};

export default VansDetail;
