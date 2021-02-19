import styled from 'styled-components';

const NavDropDownWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: calc(100vh - 72px);
  overflow: hidden;
  z-index: 50;

  .radial-bg {
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    background-image: radial-gradient(red 5%, green 15%, blue 60%);
  }
`;

export default function NavDropDown() {
  return (
    <NavDropDownWrapper>
      <div className="radial-bg"></div>
      {/* <nav></nav> */}
    </NavDropDownWrapper>
  );
}
