import { Link } from "react-router-dom";

const Reviews = () => {
  const linkStyles = {
    fontweight: "bold",
    color: "#3333FF",
  };
  return (
    <>
      <h1>Sorry, reviews work in progress</h1>
      <h3>
        Please explore our vans page{" "}
        <span>
          <Link to="/host/vans" style={linkStyles}>
            Vans
          </Link>
        </span>
      </h3>
    </>
  );
};

export default Reviews;
