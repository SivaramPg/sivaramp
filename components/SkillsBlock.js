import styled from 'styled-components';

const SkillsBlockWrapper = styled.div`
  width: 45%;
  height: auto;

  background-color: #ffffff30;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row wrap;

  margin-top: 25px;
  margin-bottom: 25px;

  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  h3 {
    width: 100%;
    display: block;
    text-align: center;
    margin: 20px 0 25px 0;

    font-size: 24px;
    color: #3d3d3d;
  }
`;

export default function SkillsBlock({ title, children }) {
  return (
    <SkillsBlockWrapper>
      <h3>{title}</h3>
      {children}
    </SkillsBlockWrapper>
  );
}
