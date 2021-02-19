import styled from 'styled-components';

import { ImHtmlFive } from 'react-icons/im';
import {
  FaCss3Alt,
  FaPython,
  FaReact,
  FaAngular,
  FaNode,
  FaAws,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiNextDotJs,
  SiDigitalocean,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiHeroku,
  SiIonic,
} from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

import Container from './Container';
import SectionTitle from './SectionTitle';
import SkillsBlock from './SkillsBlock';

const SectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    -114deg,
    rgba(48, 182, 160, 0.1),
    rgba(48, 191, 171, 0.6)
  );
  overflow-x: hidden;

  & > div {
    width: 120%;
    min-height: 700px;
    margin: 0 auto;
    background: linear-gradient(
      212deg,
      rgba(100, 2, 249, 0.3),
      rgba(28, 104, 168, 0.4)
    );
    transform: rotate(-4deg) translate(-10%, 12%);
    padding: 100px 0;

    & > * {
      transform: rotate(4deg) translateX(4%);
    }

    & > div {
      height: 100%;
    }

    .skills-container {
      width: 100%;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-flow: row wrap;
    }

    svg {
      width: 60px;
      height: 60px;
      margin: 20px;
      color: #3d3d3d;
      cursor: pointer;

      :hover {
        filter: drop-shadow(0px 0px 10px #ffffff90);
      }
    }
  }
`;

export default function Section() {
  return (
    <SectionWrapper>
      <div>
        <Container>
          <SectionTitle>Skills</SectionTitle>
          <div className="skills-container">
            <SkillsBlock title="Programming Languages">
              <ImHtmlFive data-tip="HTML5" />
              <FaCss3Alt data-tip="CSS" />
              <SiJavascript data-tip="Javascript" />
              <AiOutlineConsoleSql data-tip="SQL" />
              <FaPython data-tip="Python" />
            </SkillsBlock>
            <SkillsBlock title="Frameworks">
              <FaReact data-tip="React" />
              <FaAngular data-tip="Angular" />
              <FaNode data-tip="Express" />
              <SiNextDotJs data-tip="Next.js" />
              <SiIonic data-tip="Ionic" />
            </SkillsBlock>
            <SkillsBlock title="Databases">
              <SiMysql data-tip="MySQL" />
              <SiPostgresql data-tip="PostgreSQL" />
              <SiMongodb data-tip="MongoDB" />
            </SkillsBlock>
            <SkillsBlock title="Cloud Providers">
              <FaAws data-tip="Amazon Web Services" />
              <SiDigitalocean data-tip="DigitalOcean" />
              <SiHeroku data-tip="Heroku" />
            </SkillsBlock>
          </div>
        </Container>
      </div>
    </SectionWrapper>
  );
}
