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

    .MuiPaper-root {
        nav,
        div,
        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            padding: 20px 10px;
        }

        ul {
            list-style: none;

            li {
                cursor: pointer;
                display: flex;
                align-items: center;
                margin: 0 15px;
                padding: 2px 3px;
                font-size: 0.9rem;

                &:first-child {
                    font-weight: 800;
                    font-size: 1.1rem;
                    margin-bottom: 15px;
                }

                a {
                    margin-right: 5px;
                    text-decoration: none;
                    color: var(--text);
                }
            }
        }

        nav {
            div {
                margin-left: 15px;
                position: relative;

                .searchIcon {
                    position: absolute;
                    left: 8px;
                }

                input {
                    padding: 8px 5px 8px 28px;
                    border-radius: 5px;
                    border: 1px solid #00000073;
                    min-width: 150px;
                    width: 100%;
                }
            }
        }

        > div {
            gap: 25px;
            font-size: 1.2rem;
            flex-direction: row;

            div {
                border: 1px solid #00000073;
                border-radius: 50%;
                box-shadow: inset 3px 3px 4px #00000073;
                padding: 10px;
                font-size: 1.4rem;
            }

            .heart {
                cursor: pointer;

                &:hover {
                    color: red;
                }
            }

            .cart {
                cursor: pointer;

                &:hover {
                    color: darkorange;
                }
            }
        }
    }
`
