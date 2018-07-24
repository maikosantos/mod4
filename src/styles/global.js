import { injectGlobal } from "styled-components";

import "font-awesome/css/font-awesome.css";
import "rc-slider/assets/index.css";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

   body {
    background: #181818;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    color: #fff
  }
`;
