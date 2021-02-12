import styled from 'styled-components';

import {
  SiGithub,
  SiLinkedin,
  SiMedium,
  SiCodepen,
  SiMailDotRu,
} from 'react-icons/si';

export const SocialLinkWrapper = styled.a`
  width: 36px;
  height: 36px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 0 16px;
  transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export function GithubSocialLink({ size }) {
  return (
    <SocialLinkWrapper
      href="https://github.com/SivaramPg"
      target="_blank"
      rel="noreferrer noopener"
      data-tip="Github"
    >
      <SiGithub size={size ? size : '1.25em'} />
    </SocialLinkWrapper>
  );
}

export function LinkedInSocialLink({ size }) {
  return (
    <SocialLinkWrapper
      href="https://www.linkedin.com/in/sivaram-pandariganthan-b753a2145/"
      target="_blank"
      rel="noreferrer noopener"
      data-tip="LinkedIn"
    >
      <SiLinkedin size={size ? size : '1.25em'} />
    </SocialLinkWrapper>
  );
}

export function MediumSocialLink({ size }) {
  return (
    <SocialLinkWrapper
      href="https://sivarampg95.medium.com/"
      target="_blank"
      rel="noreferrer noopener"
      data-tip="Medium"
    >
      <SiMedium size={size ? size : '1.25em'} />
    </SocialLinkWrapper>
  );
}

export function CodepenSocialLink({ size }) {
  return (
    <SocialLinkWrapper
      href="https://codepen.io/kaizoku_95"
      target="_blank"
      rel="noreferrer noopener"
      data-tip="Codepen"
    >
      <SiCodepen size={size ? size : '1.25em'} />
    </SocialLinkWrapper>
  );
}

export function EmailSocialLink({ size }) {
  return (
    <>
      <SocialLinkWrapper
        href="mailto:sivarampg95@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
        data-tip="Email"
      >
        <SiMailDotRu size={size ? size : '1.25em'} />
      </SocialLinkWrapper>
    </>
  );
}
