import styled from 'styled-components';
import Container from './Container';
import SectionTitle from './SectionTitle';

const ProjectsSectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    294deg,
    rgba(48, 182, 160, 0.1),
    rgba(48, 191, 171, 0.6)
  );
`;

export default function ProjectsSection() {
  return (
    <ProjectsSectionWrapper>
      <Container>
        <SectionTitle>Projects</SectionTitle>
      </Container>
    </ProjectsSectionWrapper>
  );
}
