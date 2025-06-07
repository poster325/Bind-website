import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  padding: 0;
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-color);
  gap: 0.5rem;

  img {
    height: 2.5rem;
    width: auto;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: ${(props) =>
    props.$active ? "var(--primary-color)" : "var(--text-primary)"};
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.$active ? "var(--bg-accent)" : "transparent"};

  &:hover {
    color: var(--primary-color);
    background-color: var(--bg-accent);
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src="/logo.svg" alt="Bind Logo" />
          Bind
        </Logo>
        <NavMenu>
          <li>
            <NavLink to="/" $active={location.pathname === "/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" $active={location.pathname === "/about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              $active={location.pathname === "/portfolio"}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" $active={location.pathname === "/blog"}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" $active={location.pathname === "/faq"}>
              FAQ
            </NavLink>
          </li>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
