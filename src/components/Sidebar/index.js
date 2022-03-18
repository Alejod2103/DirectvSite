import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/home'>Home</SidebarLink>
        <SidebarLink to='/about'>Nuestros Planes</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
      <a href="tel:+1(813)551-1017" >
        <SidebarRoute to='/'>Llame Ahora</SidebarRoute>
      </a>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
