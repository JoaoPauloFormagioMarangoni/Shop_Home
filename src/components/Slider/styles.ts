import styled from 'styled-components'

export const SliderContainer = styled.div`
  position: relative;

  .swiper-slide {
    position: relative;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    div {
      position: absolute;

      background: rgba(255, 255, 255, 0.72);
      bottom: 20px;
      right: 20px;
      padding: 24px 105px 24px 24px;
      border-radius: 5px;
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);

      .arrowRight {
        position: absolute;
        font-size: 1.6rem;
        right: 30px;
        bottom: 29px;
        color: var(--text);
      }

      h2 {
        color: var(--text);
        font-size: 1.5rem;
      }

      p {
        margin: 4px 0 8px;
        color: #616161;
      }
      span {
        color: var(--text);
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }

  .swiper {
    padding-right: 100px;
    z-index: 0;
  }

  .swiper-pagination {
    top: 80px;
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

  .swiper-pagination-bullet-active {
    background: var(--orange);
  }

  .swiper-wrapper {
    margin-top: 136px;
  }

  .swiper-button-next {
    background: var(--orange);
    color: #fff;
    z-index: 99999;

    border-radius: 50%;
    padding: 30px;
    top: 80px;
    right: 40px;
  }

  .swiper-button-prev {
    background: var(--orange);
    color: #fff;
    z-index: 99999;

    border-radius: 50%;
    padding: 30px;
    top: 80px;
    right: 120px;
    left: auto;
  }

  @media (max-width: 1430px) {
    .swiper-slide {
      div {
        padding: 10px 60px 10px 10px;

        .arrowRight {
          right: 20px;
          bottom: 16px;
        }
      }
    }
  }

  @media (max-width: 1300px) {
    .swiper-slide {
      div {
        .arrowRight {
          right: 20px;
          bottom: 16px;
        }

        h2 {
          font-size: 1.2rem;
        }

        p {
          margin: 1px 0 5px;
          font-size: 0.9rem;
        }

        span {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .swiper-slide {
      div {
        padding: 10px 40px 10px 10px;
        right: 3px;
        bottom: 8px;

        .arrowRight {
          right: 10px;
          bottom: 10px;
        }

        h2 {
          font-size: 1rem;
        }

        p {
          margin: 1px 0 5px;
          font-size: 0.8rem;
        }

        span {
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .swiper-slide {
      div {
        h2, p {
          display: none;
        }

        span {
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .swiper-slide {
      div {
        padding: 5px 25px 5px 5px;

        .arrowRight {
          font-size: 1rem;
          right: 6px;
          bottom: 8px;
        }

        span {
          font-size: .8rem;
        }
      }
    }
  }
`

export const ContainerShopNow = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(31px);
  width: 494px;
  top: 30px;
  left: 10%;
  border-radius: 5px;
  padding: 60px;

  h1 {
    color: var(--text);
    font-size: 3rem;
  }

  p {
    text-align: justify;
    padding: 20px 0;
    color: #898989;
    line-height: 28px;
  }

  button {
    width: 100%;
    background: var(--orange);
    border: none;
    color: #fff;
    padding: 20px 0;
    font-size: 1.2rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 1470px) {
    width: 400px;

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`
