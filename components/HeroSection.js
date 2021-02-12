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

const HeroSectionWrapper = styled.section`
  width: 100%;
  height: calc(100vh + 200px);

  background: linear-gradient(
    294deg,
    rgba(48, 182, 160, 0.1),
    rgba(48, 191, 171, 0.6)
  );

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;

  header,
  aside {
    flex: 0 0 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: 'Wotfard';
  }

  header {
    align-items: flex-start;
    flex-flow: column nowrap;

    & > h1 {
      font-size: 32px;
      margin: 0 20px;
      font-weight: 400;

      span {
        font-weight: 700;
        text-transform: uppercase;
      }

      &:first-of-type {
        margin-top: 100px;
        margin-bottom: 90px;
      }

      &:last-of-type {
        margin-bottom: 20px;
      }
    }

    & > div {
      display: flex;
      padding: 90px 0 0 0;

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
    width: 600px;
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <Container>
        <header>
          <h1>👋👋&nbsp;Hey there!,</h1>
          <h1>
            I am <span>Sivaram Pandariganthan</span>
          </h1>
          {/*
            // TODO Add Typing section here.
         */}
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
