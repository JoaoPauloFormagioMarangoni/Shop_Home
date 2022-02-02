import styled from 'styled-components'

export const ProductsContainer = styled.div`
  width: 90vw;
  margin: auto;

  h1 {
    text-align: center;
    margin-bottom: 40px;
    color: var(--text);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 30px;

    list-style: none;

    li {
      width: 285px;
      background: #f4f5f7;
      border-radius: 5px;

      position: relative;

      img {
        object-fit: cover;
        height: 301px;
        width: 100%;
      }

      > span {
        position: absolute;
        top: 15px;
        right: 15px;

        color: #fff;
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        &.discount {
          background: #e97171;
        }

        &.new {
          background: #2ec1ac;
        }
      }

      div.infos {
        padding: 15px;

        h4 {
          color: var(--text);
          font-size: 1rem;
        }

        p {
          margin: 3px 0 10px;
          font-size: 0.8rem;
          color: rgba(0, 0, 0, 0.6);
        }

        > div {
          display: flex;
          justify-content: space-around;
          align-items: center;

          span:first-child {
            font-weight: 500;
          }

          span:last-child {
            font-size: 0.8rem;
            text-decoration: line-through;
            opacity: 0.4;
          }
        }
      }

      div.addToCart {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;

        width: 100%;
        height: 100%;
        background: rgba(58, 58, 58, 0.7);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 0;

        transition: opacity 0.2s;

        > div {
          display: flex;
          justify-content: space-around;
          width: 100%;

          > div {
            display: flex;
            align-items: center;
            gap: 10px;

            color: #f4f5f7;
            font-size: 1.1rem;
            cursor: pointer;

            transition: color 0.2s;

            &:hover {
              color: var(--orange);
            }
          }
        }
      }

      &:hover div.addToCart {
        opacity: 1;
      }
    }
  }

  button {
    display: block;

    background: #f4f5f7;
    color: var(--orange);
    border: 1px solid var(--orange);

    width: 245px;
    font-size: 1rem;
    padding: 10px 0;
    margin: 40px auto;
    transition: all 0.2s;

    &:hover {
      background: var(--orange);
      color: #fff;
    }
  }

  @media (max-width: 1300px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 980px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 550px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
