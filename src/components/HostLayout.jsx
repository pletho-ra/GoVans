import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  const activeLinks = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeLinks : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeLinks : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeLinks : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeLinks : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
