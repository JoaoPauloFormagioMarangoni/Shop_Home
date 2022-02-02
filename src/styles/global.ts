import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
        --background: #E5E5E5;
        --orange: #E89F71;
        --text: #3A3A3A;
        --backHeaderLeft: #F9F1E7;
        --backHeaderRight: #FCF8F3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
          font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
          font-size: 87.5%; // 14px
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
