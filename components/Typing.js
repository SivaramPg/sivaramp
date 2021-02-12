import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const TypingWrapper = styled.section`
  width: auto;
  height: auto;
  border: 5px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    -111deg,
    rgba(156, 16, 126, 0.7),
    rgba(4, 244, 241, 0.7)
  );
  background: #fff;
  padding: 10px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: normal;
  }

  h1.typing {
    font-weight: 700;
    text-transform: uppercase;
    background: -webkit-linear-gradient(
      110deg,
      rgba(61, 107, 231, 0.9),
      rgba(81, 237, 61, 0.75)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function Typing() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  const descriptors = useMemo(
    () => [
      'Full Stack Web Developer',
      'Javascript Enthusiast',
      'Computer Buff',
    ],
    []
  );

  return (
    <TypingWrapper>
      <h1>
        <span>A&nbsp;</span>
      </h1>
      <h1 className="typing">
        {count ? (
          <Typist
            key={count}
            avgTypingDelay={100}
            onTypingDone={() => setTimeout(() => setCount(0), 1000)}
          >
            {descriptors[0]}
            <Typist.Backspace count={descriptors[0].length} delay={2000} />
            {descriptors[1]}
            <Typist.Backspace count={descriptors[1].length} delay={2000} />
            {descriptors[2]}
            <Typist.Backspace count={descriptors[2].length} delay={2000} />
            {''}
          </Typist>
        ) : (
          '|'
        )}
      </h1>
    </TypingWrapper>
  );
}
