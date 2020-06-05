import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/logoSmall.svg';
import AccountPanel from '../../molecules/AccountPanel/AccountPanel';

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;

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

const NavBar = () => {
  return (
    <>
      <NavigationWrapper>
        <img src={logo} alt="logo" />
        <NavigationItemList>
          <li>
            <NavigationItem exact activeClassName="is-active" to="/">
              hottest
            </NavigationItem>
          </li>
          <li>
            <NavigationItem activeClassName="is-active" to="/allposts">
              all posts
            </NavigationItem>
          </li>
          <li>
            <NavigationItem activeClassName="is-active" to="/userposts">
              your posts
            </NavigationItem>
          </li>
        </NavigationItemList>
        <AccountPanel />
      </NavigationWrapper>
    </>
  );
};

export default NavBar;
