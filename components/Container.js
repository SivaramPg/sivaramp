import styled from 'styled-components';
import { respondTo } from '../utils/respondTo';

const ContainerStyles = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;

  display: flex;
  flex-flow: row wrap;
  position: relative;

  ${respondTo.lg`
    width: 100%;
  `}
`;

function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}

export default Container;
