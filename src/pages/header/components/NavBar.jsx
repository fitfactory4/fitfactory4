import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import {
  Burger,
  ArrowRightIcon,
  Cancel,
  Globe,
} from "../../../globalComponents";

export const NavBar = ({ langs, language }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const links = [
    {
      className: langs[language].home.introPage.navLinkClassName,
      to: "/",
      href: "#",
      homepage: true,
      name: langs[language].home.introPage.navLinkTitle,
      isGlobe: false,
    },
    {
      className: langs[language].home.introPage.navLinkClassName,
      to: "/",
      href: "#trainers",
      name: langs[language].home.trainers.navLinkTitle,
      isGlobe: false,
    },
    {
      className: langs[language].home.introPage.navLinkClassName,
      to: "/",
      href: "#pricing",
      name: langs[language].home.pricing.navLinkTitle,
      isGlobe: false,
    },
    {
      className: langs[language].home.introPage.navLinkClassName,
      href: "#",
      to: "/blogs",
      name: langs[language].blogs.navLinkTitle,
      isGlobe: false,
    },
    {
      className: langs[language].home.introPage.navLinkClassName,
      href: "#",
      to: "/contact",
      name: langs[language].contact.navLinkTitle,
      isGlobe: false,
    },
    {
      isGlobe: true,
    },
    {
      className: `${langs[language].home.introPage.navLinkClassName} last-li`,
      href: "#",
      to: "/start-trial",
      name: langs[language].startTrial.navLinkTitle,
      isGlobe: false,
    },
  ];
  return (
    <nav className="nav">
      <Link smooth to="/#" className="logo">
        FIT<span className="logo-span">FACTORY</span>
      </Link>
      <ul
        className={
          isActive ? "main-menu-mobile main-menu" : "d-none-main-menu main-menu"
        }
      >
        {links.map((link, index) => (
          <li
            className={link.isGlobe ? "nav-item sm-globe" : "nav-item"}
            key={index}
          >
            {link.isGlobe === false ? (
              <Link
                className={link.className}
                smooth
                to={link.to + link.href}
                onClick={() => toggleMenu()}
              >
                {link.name}
              </Link>
            ) : (
              <Globe />
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
  );
};
