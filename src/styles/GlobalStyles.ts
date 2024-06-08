import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap'); /* Update to Open Sans font */

  html {
    color: #333; /* Update text color to match the screenshot */
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; /* Use Open Sans font */
    background-color: #f8f9fa; /* Light gray background for the app */
  }

  * {
    box-sizing: border-box;
  }

  input, button, textarea, select {
    font: inherit;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .scale-flip {
    transform: scale(1, -1);
  }

  @keyframes shadowPulse {
    33% {
      background: #fff;
      box-shadow: -24px 0 #155c56, 24px 0 #fff;
    }
    66% {
      background: #155c56;
      box-shadow: -24px 0 #fff, 24px 0 #fff;
    }
    100% {
      background: #fff;
      box-shadow: -24px 0 #fff, 24px 0 #155c56;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
    color: #333;
  }

  button {
    font-family: 'Open Sans', sans-serif;
  }
`;
