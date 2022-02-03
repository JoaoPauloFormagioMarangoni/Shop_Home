import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 30px 0;

  button {
    z-index: 99999999999;
    position: fixed;
    top: 40px;
    right: 40px;
    color: var(--text);
    font-size: 2.5rem;

    background: #f3f3f3;
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25),
      2px 2px 3px rgba(0, 0, 0, 0.25);
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
