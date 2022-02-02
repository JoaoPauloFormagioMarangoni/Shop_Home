import { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowRight } from 'react-icons/bs'

import { BeautifulRooms, RoomsInspirationContainer } from './styles'

import imgBannerTwo from '../../assets/imgBannerTwo.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export function RoomsInspiration() {
  return (
    <RoomsInspirationContainer>
      <BeautifulRooms>
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button>Explore More</button>
      </BeautifulRooms>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <p>01 --- Bed Room</p>
            <h2>Inner Peace</h2>
            <button><BsArrowRight /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <p>01 --- Bed Room</p>
            <h2>Inner Peace</h2>
            <button><BsArrowRight /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <p>01 --- Bed Room</p>
            <h2>Inner Peace</h2>
            <button><BsArrowRight /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <p>01 --- Bed Room</p>
            <h2>Inner Peace</h2>
            <button><BsArrowRight /></button>
          </div>
        </SwiperSlide>
      </Swiper>
    </RoomsInspirationContainer>
  )
}
