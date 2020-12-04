import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/logoSmall.svg';
import AccountPanel from '../../molecules/AccountPanel/AccountPanel';

const NavigationWrapper = styled.nav`
  width: 100%;
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
  width: 120px;
  display: block;
  text-decoration: none;
  color: black;
  font-weight: ${({ theme }) => theme.font.bold};
  padding-left: 20px;

  &.is-active {
    color: ${({ theme }) => theme.darkRed};
  }
`;

const StyledLogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledLogo = styled.img`
  width: 320px;
`;

const NavBar = () => {
  return (
    <>
      <NavigationWrapper>
        <StyledLogoWrapper>
          <Link to="/">
            <StyledLogo src={logo} alt="logo" />
          </Link>
        </StyledLogoWrapper>
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
