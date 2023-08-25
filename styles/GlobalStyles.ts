'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  html,
  body {
    color: ${(props) => props.theme.light};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    margin: 0 auto;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
  font-family: 'icomoon';
  src:  url('/fonts/icomoon.eot?40o5am');
  src:  url('/fonts/icomoon.eot?40o5am#iefix') format('embedded-opentype'),
    url('/fonts/icomoon.ttf?40o5am') format('truetype'),
    url('/fonts/icomoon.woff?40o5am') format('woff'),
    url('/fonts/icomoon.svg?40o5am#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
  }

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-tiktok:before {
  content: "\e900";
}
.icon-facebook:before {
  content: "\ea90";
}
.icon-instagram:before {
  content: "\ea92";
}
.icon-spotify:before {
  content: "\ea94";
}
.icon-twitter:before {
  content: "\ea96";
}
.icon-youtube:before {
  content: "\ea9d";
}
.icon-soundcloud:before {
  content: "\eac3";
}


  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: ${(props) => props.theme.light};
      background: ${(props) => props.theme.dark};
    }
  }
`;

export default GlobalStyle;
