import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section>
      <nav>
        <Navbar />
      </nav>
      <article>
        <Outlet />
      </article>
    </section>
  );
};

export default Layout;
