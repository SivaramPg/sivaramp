import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { GiHamburgerMenu, GiSkills } from 'react-icons/gi';
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';

import Container from '../components/Container';
import NavDropDown from './NavDropDown';
import { respondTo } from '../utils/respondTo';

const NavbarWrapper = styled.nav`
  width: 100%;
  max-height: ${(props) => (props.showNavDropDown ? '100vh' : '72px')};

  transition: max-height 0.25s ease-in-out;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;

  position: fixed;
  top: 0;
  left: 0;

  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  padding: 0 50px;
  z-index: 150;

  ${respondTo.md`
    padding: 0 20px;
  `}
  ${respondTo.sm`
    padding: 0 25px;
    position: relative;
  `}

  & > div {
    justify-content: space-between;

    & > a,
    & > ul {
      padding: 6px 0;
    }
  }

  img {
    width: 150px;
    margin-top: 10px;
  }

  .nav-links {
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
    <NavbarWrapper showNavDropDown={showNavDropDown}>
      <Container>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>
        <ul className="nav-links">
          <NavLink
            href="/"
            onClick={() =>
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
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
      <NavDropDown />
    </NavbarWrapper>
  );
}

function NavLink({ href, children, onClick = () => null }) {
  return (
    <Link href={href}>
      <a onClick={onClick}>
        <li>{children}</li>
      </a>
    </Link>
  );
}
