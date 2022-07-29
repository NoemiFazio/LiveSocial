import "./index.css";
import logo from "./logos.svg";

const Navbar = () => {
  const profileName = localStorage.getItem("username");

  const userLogOut = () => {
    localStorage.removeItem("username", profileName);
  };

  return (
    <div className="Navbar">
      <img src={logo} className="navbar-logo" alt="logo" />
      <ul className="Navbar__list">
        <li>
          <a href="/">Utente: {profileName}</a>
        </li>
        <li>
          <a href="/" onClick={userLogOut}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
