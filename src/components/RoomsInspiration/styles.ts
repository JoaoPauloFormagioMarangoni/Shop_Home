import styled from 'styled-components'

export const RoomsInspirationContainer = styled.div`
  display: flex;
  background: #fcf8f3;

  .swiper {
    padding: 50px 80px 50px 0;
    max-width: 1200px;
    margin-right: 0;
  }

  .swiper-pagination {
    bottom: 85px;
    z-index: -1;

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
    }

    .swiper-pagination-bullet-active {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        border: 1px solid var(--orange);
        border-radius: 50%;
        top: -1px;
        left: -1px;
        width: 100%;
        height: 100%;
        transform: scale(1.5);
      }
    }
  }

  .swiper-slide {
    height: 486px;
    width: 404px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    div {
      display: none;

      padding: 15px;
      position: absolute;
      bottom: 24px;
      left: 24px;

      background: rgba(255, 255, 255, 0.5);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);

      p {
        color: var(--text);
        font-size: 1rem;
      }

      h2 {
        color: var(--text);
        font-size: 1.5rem;
      }

      button {
        position: absolute;
        bottom: 0;
        right: -39px;

        padding: 10px;
        background: var(--orange);
        color: #fff;
        border: 0;

        display: flex;
        align-items: center;

        font-size: 1.2rem;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  .swiper-slide-active {
    box-shadow: 0 10px 10px rgba(97, 97, 97, 0.1);
    background: #fff;
    height: 582px;

    div {
      display: block;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    background: #fff;
    color: var(--orange);

    border-radius: 50%;
    padding: 25px;

    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  .swiper-pagination-bullet-active {
    background: var(--orange);
  }

  .swiper-button-disabled {
    display: none;
  }

  @media (max-width: 850px) {
    flex-direction: column;

    .swiper {
      margin-left: 0;
    }
  }
`

export const BeautifulRooms = styled.div`
  padding: 100px 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.2rem;
    color: var(--text);

    max-width: 378px;
  }

  p {
    color: #616161;
    line-height: 150%;

    max-width: 378px;

    margin: 10px 0 30px;
  }

  button {
    padding: 10px 0;
    width: 50%;
    font-size: 1rem;

    color: #fff;
    background: var(--orange);
    border: none;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
