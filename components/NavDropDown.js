import Link from 'next/link';
import styled from 'styled-components';

import { GiSkills } from 'react-icons/gi';
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import { respondTo } from '../utils/respondTo';

const NavDropDownWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    list-style-type: none;
    width: 100%;
    height: 100%;

    ${respondTo.xs`
      flex-flow: column nowrap;
    `}

    & li {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      cursor: pointer;
      padding: 20px;
      font-size: 16px;
      border-radius: 5px;
      transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
      width: 155px;

      background-color: #00000005;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      svg {
        margin-right: 10px;
        color: black;
        color: #3d3d3d;
      }
    }
  }
`;

export default function NavDropDown() {
  return (
    <NavDropDownWrapper>
      <ul>
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
      </ul>
    </NavDropDownWrapper>
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
