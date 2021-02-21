import styled from 'styled-components';
import Container from './Container';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const ProjectsSectionWrapper = styled.section`
  width: 100%;
  /* height: 100vh; */
  min-height: 1000px;
  background: linear-gradient(
    294deg,
    rgba(48, 182, 160, 0.1),
    rgba(48, 191, 171, 0.6)
  );

  .projects {
    width: 100%;
    margin-top: 50px;
    height: 100%;
    /* background-color: pink; */

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectsSectionWrapper>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <div className="projects">
          <ProjectCard
            thumbnail="/url-masker.png"
            title="URL Masker"
            websiteUrl="https://url-masker.sivaramp.com/"
            githubUrl="https://github.com/SivaramPg/url-masker"
          />
          <ProjectCard
            thumbnail="/faceapp.png"
            title="Face Recognition"
            websiteUrl="https://faceapp.sivaramp.com/"
            githubUrl="https://github.com/SivaramPg/Face-Recognition-App"
          />
          <ProjectCard
            thumbnail="/js-snake-game.png"
            title="JS Snake Game"
            websiteUrl="https://snake.sivaramp.com/"
            githubUrl="https://github.com/SivaramPg/JS_Snake_Game"
          />
          <ProjectCard
            thumbnail="/swapi-ssg.png"
            title="SWAPI-SSG"
            websiteUrl="https://starwars.sivaramp.com/"
            githubUrl="https://github.com/SivaramPg/swapi-ssg"
          />
          <ProjectCard
            thumbnail="/json-prettier.png"
            title="JSON Prettier"
            websiteUrl="https://json.sivaramp.com/"
            githubUrl="https://github.com/SivaramPg/json-prettier"
          />
          <ProjectCard
            thumbnail="/linear-gradient.png"
            title="Linear Gradients"
            websiteUrl="https://bg.sivaramp.com/"
            githubUrl="https://github.com/SivaramPg/Gradient-Background-Generator"
          />
        </div>
      </Container>
    </ProjectsSectionWrapper>
  );
}
