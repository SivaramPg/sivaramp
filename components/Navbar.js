import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { GiHamburgerMenu, GiSkills } from 'react-icons/gi';
import { FaHome, FaLaptopCode } from 'react-icons/fa';

import Container from '../components/Container';
import NavDropDown from './NavDropDown';
import { SiMinutemailer } from 'react-icons/si';

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  padding: 0 50px;
  z-index: 150;

  & > div {
    justify-content: space-between;
  }

  img {
    width: 150px;
    margin-top: 10px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;

    & li {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px 0 10px;
      cursor: pointer;
      padding: 12px 20px;
      font-size: 16px;
      border-radius: 5px;
      transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);

      :hover {
        background-color: #00000005;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      }

      @media screen and (max-width: 768px) {
        display: none;
      }

      svg {
        margin-right: 10px;
        color: black;
        color: #3d3d3d;
      }
    }
  }

  .icon {
    display: inline-block;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export default function Navbar() {
  const [showNavDropDown, setShowNavDropDown] = useState(false);
  return (
    <>
      <NavbarWrapper>
        <Container>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="logo" />
            </a>
          </Link>
          <ul>
            <NavLink href="/">
              <FaHome size="1.25em" />
              Home
            </NavLink>
            <NavLink href="/#skills">
              <GiSkills size="1.25em" />
              Skills
            </NavLink>
            <NavLink href="/#projects">
              <FaLaptopCode size="1.25em" /> Projects
            </NavLink>
            <NavLink href="/#contact-me">
              <SiMinutemailer size="1.25em" /> Contact Me
            </NavLink>
            <GiHamburgerMenu
              className="icon"
              size="2em"
              onClick={() => setShowNavDropDown((prevState) => !prevState)}
            />
          </ul>
        </Container>
      </NavbarWrapper>
      {showNavDropDown && <NavDropDown />}
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a>
        <li>{children}</li>
      </a>
    </Link>
  );
}
