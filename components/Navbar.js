import Link from 'next/link';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';

import Container from '../components/Container';

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
  z-index: 100;

  & > div {
    justify-content: space-between;
  }

  img {
    width: 150px;
    transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
    margin-top: 10px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;

    & > a > li {
      display: inline-block;
      margin: 0 30px 0 30px;
      cursor: pointer;
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Container>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>
        <ul>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#contact-me">Contact Me</NavLink>
          <GiHamburgerMenu size="2em" style={{ display: 'inline-block' }} />
        </ul>
      </Container>
    </NavbarWrapper>
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
