import { Outlet } from "react-router-dom";
import NavContainer from "./navbar/NavContainer";

const Layout = () => {
  return (
    <>
      <nav>
        <NavContainer />
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
