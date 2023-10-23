import { HashLink as Link } from "react-router-hash-link";
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
      href: "#",
      homepage: true,
      name: "Home",
    },
    {
      className: "nav-link",
      to: "/",
      href: "#trainers",
      name: "Trainers",
    },
    {
      className: "nav-link",
      to: "/",
      href: "#pricing",
      name: "Pricing",
    },
    {
      className: "nav-link",
      href: "#",
      to: "/blogs",
      name: "Blogs",
    },
    {
      className: "nav-link",
      href: "#",
      to: "/contact",
      name: "Contact",
    },
    {
      className: "nav-link last-li",
      href: "#",
      to: "/start-trial",
      name: "Start-Trial",
    },
  ];
  return (
    <header className="header">
      <nav className="nav">
        <Link smooth to="/#" className="logo">
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
              <Link
                className={link.className}
                smooth
                to={link.to + link.href}
                onClick={() => toggleMenu()}
              >
                {link.name}
              </Link>
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
