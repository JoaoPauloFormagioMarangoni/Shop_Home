import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 25px;
  gap: 50px;

  div {
    h2 {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
    ul {
      list-style: none;

      display: flex;
      flex-direction: column;
      gap: 10px;

      text-align: justify;

      li {
        cursor: pointer;

        &:hover {
            color: var(--orange);
        }
      }
    }

    input {
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 5px 10px;
      background: #F4F5F7;
    }
  }
`
