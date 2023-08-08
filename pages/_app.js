import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Wotfard';
    src: url('/wotfard-regular-webfont.eot');
    src: url('/wotfard-regular-webfont.eot?#iefix') format('embedded-opentype'),
    url('/wotfard-regular-webfont.ttf') format('truetype'),
    url('/wotfard-regular-webfont.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'geomanist' ;
    src: url('/geomanist-regular-webfont.eot');
    src: url('/geomanist-regular-webfont.eot?#iefix') format('embedded-opentype'),
    url('/geomanist-regular-webfont.woff') format('woff'),
    url('/geomanist-regular-webfont.ttf') format('truetype'),
    url('/geomanist-regular-webfont.woff2') format('woff2'),
    url('/geomanist-regular-webfont.svg#webfont') format('svg');
    font-display: swap;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    font-family: 'geomanist', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const theme = {};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ReactTooltip id="tooltip" effect="solid" place="top" type="dark" />
      </ThemeProvider>
    </>
  );
}
