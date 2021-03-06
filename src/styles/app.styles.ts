import styled from 'styled-components'

export const Feature = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  margin: 50px 10px;
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    gap: 20px;

    img {
      width: 45px;
    }

    div {
      font-size: 0.9rem;

      h3 {
        margin-bottom: 4px;
        color: var(--text);
      }

      p {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;

    li {
      justify-content: flex-start;
    }
  }
`

export const AppContainer = styled.div`
  hr {
    width: 93vw;
    margin: 50px auto;

    border: 1px solid;
    opacity: 0.08;
    border-radius: 5px;
  }
`
