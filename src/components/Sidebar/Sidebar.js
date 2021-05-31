import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWraper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWraper>
        <SidebarMenu>
          <SidebarLink to="goals" onClick={toggle}>
            Objetivos
          </SidebarLink>
          <SidebarLink to="schedule" onClick={toggle}>
            Calendario
          </SidebarLink>
          <SidebarLink to="content" onClick={toggle}>
            Contenido
          </SidebarLink>
          <SidebarLink to="pricing" onClick={toggle}>
            Inversión
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            href="https://landing.mailerlite.com/webforms/landing/e4l9z9"
            target="_blank "
            rel="noreferrer"
          >
            Inscríbete
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWraper>
    </SidebarContainer>
  );
}

export default Sidebar;
