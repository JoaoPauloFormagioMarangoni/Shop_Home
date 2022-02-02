import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 30px 0;

  nav,
  div,
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
      }

      span {
        margin-right: 5px;
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
`

export const BackLeft = styled.div`
    background: var(--backHeaderLeft);
    position: absolute;
    top: 0;
    left: 0;
    width: 70vw;
    height: 30%;
    z-index: -1;
`

export const BackRight = styled.div`
    background: var(--backHeaderRight);
    position: absolute;
    top: 0;
    right: 0;
    width: 30vw;
    height: 30%;
    z-index: -1;
`
