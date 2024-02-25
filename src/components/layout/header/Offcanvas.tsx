import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="Image" title="Image" priority />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "home"
                    )}`}
                    onClick={() => handleSubmenu("home")}
                  >
                    ДОМАШНЯЯ
                  </button>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="about-us">О НАС</Link>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "services"
                    )}`}
                    onClick={() => handleSubmenu("services")}
                  >
                    УСЛУГИ
                  </button>
                  <ul
                    className={`navbar__sub-menu ${isSubMenuOpen("services")}`}
                  >
                    <li>
                      <Link href="our-services">Список услуг</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  {/*<button*/}
                  {/*  aria-label="dropdown menu"*/}
                  {/*  className={`navbar__dropdown-label ${isSubMenuButton(*/}
                  {/*    "projects"*/}
                  {/*  )}`}*/}
                  {/*  onClick={() => handleSubmenu("projects")}*/}
                  {/*>*/}
                  {/*  Projects*/}
                  {/*</button>*/}
                  {/*<ul*/}
                  {/*  className={`navbar__sub-menu ${isSubMenuOpen("projects")}`}*/}
                  {/*>*/}
                  {/*  <li>*/}
                  {/*    <Link href="our-projects">Our Projects</Link>*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    <Link href="project-single">Project Details</Link>*/}
                  {/*  </li>*/}
                  {/*</ul>*/}
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "pages"
                    )}`}
                    onClick={() => handleSubmenu("pages")}
                  >
                    Pages
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("pages")}`}>
                    <li>
                      <Link href="portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link href="contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
              <Link href="contact-us" className="btn btn--secondary">
                ЗАПИСАТЬСЯ
              </Link>
            </div>
          </div>
          <div className="offcanvas-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
