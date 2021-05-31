import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

function Navbar({ toggle }) {
  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              ortodoncia lingual
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="goals"
                  smooth={true}
                  duration={300}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Objetivos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="schedule"
                  smooth={true}
                  duration={300}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Calendario
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="content"
                  smooth={true}
                  duration={300}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Contenido
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="pricing"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Inversión
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                href="https://landing.mailerlite.com/webforms/landing/e4l9z9"
                target="_blank "
                rel="noreferrer"
              >
                Inscríbete
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
