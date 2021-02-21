import dynamic from 'next/dynamic';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

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
        <ReactTooltip effect="solid" place="top" type="dark" />
      </ThemeProvider>
    </>
  );
}
