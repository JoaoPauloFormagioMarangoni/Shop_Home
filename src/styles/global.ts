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
        padding: 0 10px ;
        
        nav,
        > div,
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
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-direction: column;

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
            justify-content: space-around;
            font-size: 1.2rem;
            flex-direction: row;

            div {
                display: flex;
                align-items: center;
                justify-content: center;

                border: 1px solid #00000073;
                border-radius: 50%;
                box-shadow: inset 3px 3px 4px #00000073;
                height: 45px;
                width: 45px;
                font-size: 1.4rem;
            }

            .heart {
                cursor: pointer;

                &:hover {
                    color: red;
                }
            }

            button {
                background: transparent;
                border: none;
                font-size: 1.2rem;

                position: relative;

                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: -12px;
                    right: -12px;

                    color: var(--orange);
                    background: #000000;

                    font-size: 0.7rem;
                    font-weight: bold;

                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                }

                & .cart:hover {
                    color: darkorange;
                }
            }
        }
    }

    .modalStyle {
        padding: 3rem;
        width: 80vw;
        height: 90vh;
        position: relative;
        border-radius: 5px;
        background: #954d20;
        color: #ffe;

        div {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        > div {
            padding: 10px;

            h3 {
                font-size: 1.5rem;
                letter-spacing: 1px;
            }

            p {
                span {
                    font-weight: bold;
                }
            }

            button {
                background: #ffe;
                font-weight: 500;
                border-radius: 50px;
                padding: 5px 15px;
                font-size: 1rem;
                border: 1px solid #ffe;
                box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);
                transition: all 0.2s;

                &:hover {
                    background: var(--orange);
                    color: #ffe;
                }
            }
        }

        ul {
            height: 100%;
            width: 100%;

            overflow-x: auto;
            list-style: none;

            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            

            li {
                position: relative;

                img {
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                }

                div {
                    margin-bottom: 5px;

                    button {
                        display: flex;
                        align-items: center;
                        color: var(--text);
                        border-radius: 50px;
                        padding: 2px 8px;
                        border: 1px solid #ffe;
                        font-size: 1rem;

                        &:hover {
                            box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25), 2px 2px 3px rgba(0, 0, 0, 0.25);
                        }
                    }
                }
            }
        }
    }
    
    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);

      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
    }
`
