import styled from 'styled-components'

export const TipsAndTricksContainer = styled.div`
  margin-bottom: 50px;

  h2 {
    margin: 40px 0 0;
    text-align: center;

    font-size: 2rem;
    color: var(--text);
  }

  .swiper {
    padding: 50px 80px;
  }

  .swiper-slide {
    img {
      width: 100%;
    }

    div {
        padding: 15px;

        p {
            color: var(--text);
            font-size: 1.2rem;
            font-weight: 500;
        }

        span {
            color: rgba(0, 0, 0, 0.6);
            font-size: 0.9rem;
        }
    }
  }

  .swiper-slide-next {
    box-shadow: 0 10px 10px rgba(97, 97, 97, 0.1);
    background: #fff;
  }

  .swiper-button-next, .swiper-button-prev {
    background: #fff;
    color: var(--orange);

    border-radius: 50%;
    padding: 25px;

    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  .swiper-pagination-bullet-active {
    background: var(--orange);
  }
`
