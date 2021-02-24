import styled from 'styled-components';
import { respondTo } from '../utils/respondTo';

const SectionTitleElement = styled.h2`
  width: 90%;
  margin: 0 auto;

  font-size: 48px;
  position: relative;
  margin-bottom: 20px;

  ${respondTo.md`
    font-size: 40px;
  `}
  ${respondTo.sm`
    margin-top: 10px;
  `}
  ${respondTo.xs`
    margin-top: 10px;
    width: 100%;
    text-align: center;
  `}

  span {
    color: #00000099;
  }
`;

export default function SectionTitle({ children }) {
  return (
    <SectionTitleElement>
      <span>__</span>
      {children}
      <span>__</span>
    </SectionTitleElement>
  );
}
