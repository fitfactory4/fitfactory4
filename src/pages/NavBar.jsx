import { Link } from "react-router-dom";
import { useState } from "react";
import { Burger, ArrowRightIcon, Cancel } from "../globalComponents";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const links = [
    {
      className: "nav-link",
      to: "/",
      name: "Home",
    },
    {
      className: "nav-link",
      to: "",
      href: "#trainers",
      name: "Trainers",
    },
    {
      className: "nav-link",
      to: "",
      href: "#pricing",
      name: "Pricing",
    },
    {
      className: "nav-link",
      to: "/news",
      name: "News",
    },
    {
      className: "nav-link",
      to: "/contact",
      name: "Contact",
    },
    {
      className: "nav-link last-li",
      to: "/start-trial",
      name: "Start-Trial",
    },
  ];
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          FIT<span className="logo-span">FACTORY</span>
        </Link>
        <ul
          className={
            isActive
              ? "main-menu-mobile main-menu"
              : "d-none-main-menu main-menu"
          }
        >
          {links.map((link, index) => (
            <li className="nav-item" key={index}>
              {link.to === "" ? (
                <a
                  className="nav-link"
                  href={link.href}
                  onClick={() => toggleMenu()}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  className={link.className}
                  to={link.to}
                  onClick={() => toggleMenu()}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <Link to={"/start-trial"}>
            <ArrowRightIcon />
          </Link>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          {isActive ? <Cancel /> : <Burger />}
        </div>
      </nav>
    </header>
  );
}
