import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
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
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.$isActive ? "var(--bg-accent)" : "transparent"};
  color: ${(props) =>
    props.$isActive ? "var(--primary-color)" : "var(--text-primary)"};

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
        <Logo to="/">Bind</Logo>
        <NavMenu>
          <li>
            <NavLink to="/" $isActive={location.pathname === "/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" $isActive={location.pathname === "/about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              $isActive={location.pathname === "/portfolio"}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" $isActive={location.pathname === "/blog"}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" $isActive={location.pathname === "/faq"}>
              FAQ
            </NavLink>
          </li>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
