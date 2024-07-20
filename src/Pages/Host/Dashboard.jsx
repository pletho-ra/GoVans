import { Link } from "react-router-dom";

const Dashboard = () => {
  const vanlink = {
    fontweight: "bold",
    color: "#3333FF",
  };
  return (
    <>
      <h1>Sorry, dashBoards work in progress</h1>
      <h3>
        Please explore our vans page{" "}
        <span>
          <Link to="/host/vans" style={vanlink}>
            Vans
          </Link>
        </span>
      </h3>
    </>
  );
};

export default Dashboard;
