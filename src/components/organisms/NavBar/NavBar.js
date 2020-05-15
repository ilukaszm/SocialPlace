import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/LogoSmall.svg';
import AccountPanel from '../../molecules/AccountPanel/AccountPanel';
import Input from '../../atoms/Input/Input';

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

  @media (min-width: 1024px) {
    flex-direction: row;
    align-item: center;
    justify-content: space-around;
  }
`;

const NavigationItemList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavigationItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: black;
  font-weight: ${({ theme }) => theme.font.bold};
  padding-left: 20px;

  &.is-active {
    color: ${({ theme }) => theme.darkRed};
  }
`;

const StyledInput = styled(Input)`
  width: 80vw;
  margin: 0 auto 20px;

  @media (min-width: 1024px) {
    width: 45vw;
  }
`;

const NavBar = () => {
  return (
    <>
      <NavigationWrapper>
        <img src={logo} alt="logo" />
        <NavigationItemList>
          <li>
            <NavigationItem exact activeClassName="is-active" to="/home">
              hottest
            </NavigationItem>
          </li>
          <li>
            <NavigationItem activeClassName="is-active" to="/home/all">
              all posts
            </NavigationItem>
          </li>
          <li>
            <NavigationItem activeClassName="is-active" to="/home/post">
              your posts
            </NavigationItem>
          </li>
        </NavigationItemList>
        <AccountPanel />
      </NavigationWrapper>
      <StyledInput placeholder="Search post" search />
    </>
  );
};

export default NavBar;
