import NavbarNew from "./NavbarNew";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavbarNew />
      <article>
        <Outlet />
      </article>
    </div>
  );
};

export default Layout;
