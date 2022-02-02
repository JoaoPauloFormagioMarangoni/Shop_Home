import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BiRightArrowAlt } from 'react-icons/bi'

import imgBannerTwo from '../../assets/imgBannerTwo.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { ContainerShopNow, SliderContainer } from './styles'

export function Slider() {
  return (
    <SliderContainer>
      <ContainerShopNow>
        <h1>High-Quality Furniture Just For You</h1>
        <p>
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home.
        </p>
        <button>Shop Now</button>
      </ContainerShopNow>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        navigation
        autoHeight={true}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <h2>Bohauss</h2>
            <p>Luxury big sofa 2-seat</p>
            <span>Rp 18.000.000</span>
            <BiRightArrowAlt className="arrowRight" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <h2>Bohauss</h2>
            <p>Luxury big sofa 2-seat</p>
            <span>Rp 17.000.000</span>
            <BiRightArrowAlt className="arrowRight" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <h2>Bohauss</h2>
            <p>Luxury big sofa 2-seat</p>
            <span>Rp 17.000.000</span>
            <BiRightArrowAlt className="arrowRight" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <h2>Bohauss</h2>
            <p>Luxury big sofa 2-seat</p>
            <span>Rp 17.000.000</span>
            <BiRightArrowAlt className="arrowRight" />
          </div>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  )
}
