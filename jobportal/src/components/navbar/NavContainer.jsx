import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";

const NavContainer = () => {
  return (
    <nav>
      <article>
        <Logo />
      </article>
      <article>
        <Navigation />
      </article>
      <article>
        <Profile />
      </article>
    </nav>
  );
};

export default NavContainer;
