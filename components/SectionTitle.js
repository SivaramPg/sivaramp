import styled from 'styled-components';

const SectionTitleElement = styled.h2`
  width: 90%;
  margin: 0 auto;

  font-size: 48px;
  position: relative;
  margin-bottom: 20px;
`;

export default function SectionTitle({ children }) {
  return <SectionTitleElement>__{children}__</SectionTitleElement>;
}
