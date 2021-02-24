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
  SiFirebase,
} from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

import Container from './Container';
import SectionTitle from './SectionTitle';
import SkillsBlock from './SkillsBlock';
import { respondTo } from '../utils/respondTo';

const SkillsSectionWrapper = styled.section`
  width: 100%;
  /* height: 100vh; */
  min-height: 900px;
  background: linear-gradient(
    -114deg,
    rgba(48, 182, 160, 0.1),
    rgba(48, 191, 171, 0.6)
  );
  overflow: hidden;
  ${respondTo.xs`
    min-height: 1100px;
  `}

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
    ${respondTo.sm`
      padding: 60px 0;
    `}
    ${respondTo.xs`
      padding: 30px 0;
    `}

    & > div {
      height: 100%;
      transform: rotate(4deg) translateX(2.5%);

      ${respondTo.lg`
        max-width: 100vw;
        transform: rotate(4deg) translateX(1.25%);
      `}
      ${respondTo.xs`
        transform: rotate(4deg) translateX(0%);
      `}
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

      ${respondTo.md`
        width: 50px;
        margin: 15px;
      `}

      ${respondTo.sm`
        margin: 10px;
      `}

      :hover {
        filter: drop-shadow(0px 0px 10px #ffffff90);
      }
    }
  }
`;

export default function SkillsSection() {
  return (
    <SkillsSectionWrapper id="skills">
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
              <SiFirebase data-tip="Firebase" />
              <SiHeroku data-tip="Heroku" />
            </SkillsBlock>
          </div>
        </Container>
      </div>
    </SkillsSectionWrapper>
  );
}
