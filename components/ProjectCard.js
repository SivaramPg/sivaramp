import styled from 'styled-components';

import { GoGlobe } from 'react-icons/go';
import { SiGithub } from 'react-icons/si';

const ProjectCardWrapper = styled.div`
  width: 350px;
  min-height: 300px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 10px;
  padding: 13px 10px;
  color: #3d3d3d;

  margin: 20px;

  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .thumbnail {
    width: 99%;
    margin: 0 auto;
    overflow: hidden;

    img {
      border: 2px solid #00000020;
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      object-fit: contain;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.1s ease-in-out;
      cursor: pointer;

      :hover {
        filter: brightness(0.75);
      }
    }
  }

  h3 {
    width: 100%;
    text-align: left;
    text-transform: capitalize;
    font-size: 32px;
    font-family: 'IBM Plex Mono';
    font-weight: medium;
    padding: 10px 0;
  }

  .buttons {
    width: 100%;
    height: auto;
    margin: 5px 0 0 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;

    .button {
      border: 1px solid #00000010;

      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      padding: 10px;
      font-size: 13px;
      border-radius: 5px;
      transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
      font-family: 'IBM Plex Mono';
      font-weight: bold;
      background-color: black;
      color: white;

      :hover {
        background-color: #00000005;
        color: black;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export default function ProjectCard({
  title,
  thumbnail,
  websiteUrl,
  githubUrl,
}) {
  return (
    <ProjectCardWrapper>
      <div className="thumbnail">
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt="" />
        </a>
      </div>
      <h3>{title}</h3>
      <div className="buttons">
        <a
          className="button"
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoGlobe size="1.5em" /> Visit Website
        </a>
        <a
          className="button"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size="1.5em" /> View Source
        </a>
      </div>
    </ProjectCardWrapper>
  );
}
