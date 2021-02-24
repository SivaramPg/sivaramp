import styled from 'styled-components';
import Container from '../components/Container';
import Typing from '../components/Typing';
import {
  GithubSocialLink,
  LinkedInSocialLink,
  MediumSocialLink,
  EmailSocialLink,
  SocialLinkWrapper,
} from '../components/SocialLinks';
import { respondTo } from '../utils/respondTo';

const HeroSectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 800px;

  background: linear-gradient(
    294deg,
    rgba(48, 182, 160, 0.1),
    rgba(48, 191, 171, 0.6)
  );

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;

  ${respondTo.md`
      min-height: 800px;
  `}
  ${respondTo.sm`
    min-height: 600px;
  `}
  ${respondTo.xs`
    min-height: 500;
    height: calc(100vh - 72px);
  `}

  & > div {
    flex-flow: row wrap;
  }

  header,
  aside {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    ${respondTo.md`
      width: 100%;
    `}
  }

  aside {
    order: 2;
    ${respondTo.md`
      order: 1;
    `}
  }

  h1 {
    font-family: 'Wotfard';
  }

  header {
    order: 1;
    align-items: flex-start;
    flex-flow: column nowrap;

    ${respondTo.md`
      order: 2;
      align-items: center;
    `}

    & > h1 {
      font-size: 32px;
      margin: 0 20px;
      font-weight: 400;

      ${respondTo.md`
          margin: 0;
          text-align: center;
      `}
      ${respondTo.sm`
        font-size: 24px;
      `}

      span {
        font-weight: 700;
        text-transform: uppercase;
      }

      &:first-of-type {
        margin-top: 100px;
        margin-bottom: 90px;
        ${respondTo.md`
          margin: 20px 0;
        `}
      }

      &:last-of-type {
        margin-bottom: 20px;
      }
    }

    & > div {
      display: flex;
      padding: 90px 0 0 0;

      ${respondTo.md`
        padding: 40px 0 0 0;
      `}
      ${respondTo.sm`
        padding-bottom: 20px;
      `}

      ${SocialLinkWrapper} {
        width: 50px;
        height: 50px;
        background-color: transparent;
        margin: 0 18px;
        border-radius: 5px;
        background-color: #ffffff50;
        color: #273036;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

        &:hover {
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }
      }
    }
  }

  img {
    width: 100%;
    ${respondTo.lg`
      width: 500px;
    `}
    ${respondTo.md`
      width: 300px;
    `}
    ${respondTo.xs`
      width: 200px;
    `}
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <Container>
        <header>
          <h1>👋🏼👋🏼&nbsp;Hey there!,</h1>
          <h1>
            I am <span>Sivaram Pandariganthan</span>
          </h1>
          <Typing />
          <div>
            <GithubSocialLink size="2em" />
            <LinkedInSocialLink size="2em" />
            <MediumSocialLink size="2em" />
            <EmailSocialLink size="2em" />
          </div>
        </header>
        <aside>
          <figure>
            <img src="/coding-illustration.svg" alt="" />
          </figure>
        </aside>
      </Container>
    </HeroSectionWrapper>
  );
}
