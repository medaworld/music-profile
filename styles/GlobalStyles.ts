'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --sectionspace: 1rem;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --press: -4px 4px 20px 0 rgba(0, 0, 0, 0.2) inset,
        4px -4px 20px 0px rgba(0, 0, 0, 0.25) inset;
    --neumorph: 6px 6px 6px 0 rgba(0, 0, 0, 0.25),
    -1px -1px 6px 0 rgba(255, 255, 255, 0.3);
    --cardBorderRadius: 20px;
    --spacebetween: 50px;
  }

  html,
  body {
    color: ${(props) => props.theme.primary};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  body {
    background-color: ${(props) => props.theme.background};
    
    &.blur {
      display: initial;
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
     
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
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



`;

export default GlobalStyle;
