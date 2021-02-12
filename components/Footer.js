import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import Container from '../components/Container';
import {
  GithubSocialLink,
  LinkedInSocialLink,
  MediumSocialLink,
  CodepenSocialLink,
  EmailSocialLink,
} from '../components/SocialLinks';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 150px;

  background-color: #273036;

  display: flex;
  align-items: center;
  position: relative;
  overflow: visible;

  .wave-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: absolute;
    top: -200px;
    left: 0;
    display: flex;
    align-items: center;

    background: url('/wave.svg');
    animation: 60s scroll infinite linear;
    animation-direction: alternate;

    @keyframes scroll {
      100% {
        background-position: -3000px 0px;
      }
    }
  }

  div > div:nth-of-type(1) {
    width: 40%;
    display: flex;
    align-items: flex-start;
    flex-flow: column nowrap;

    p {
      color: white;
    }

    p:nth-of-type(2) {
      font-size: 12px;
    }
  }

  div > div:nth-of-type(2) {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    /* align-items: center; */
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="wave-container"></div>
      <Container>
        <div>
          <p>
            Made with &nbsp;
            <FaHeart style={{ color: 'red' }} />
            &nbsp; by Sivaram Pandariganthan
          </p>
          <br />
          <br />
          <br />
          <p>
            &#169; 2020-present Sivaram Pandariganthan. All Rights Reserved.
          </p>
        </div>
        <div>
          <GithubSocialLink />
          <LinkedInSocialLink />
          <MediumSocialLink />
          <CodepenSocialLink />
          <EmailSocialLink />
        </div>
      </Container>
    </FooterWrapper>
  );
}
