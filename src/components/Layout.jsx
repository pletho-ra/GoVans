import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index.js";

const Layout = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
