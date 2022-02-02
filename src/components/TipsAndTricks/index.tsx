import { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import imgBannerTwo from '../../assets/imgBannerTwo.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { TipsAndTricksContainer } from './styles'

export function TipsAndTricks() {
  return (
    <TipsAndTricksContainer>
      <h2>Tips &amp; Tricks</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <p>Solution for clean look working space</p>
            <span>10 jan 2020</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <p>Solution for clean look working space</p>
            <span>10 jan 2020</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <p>Solution for clean look working space</p>
            <span>10 jan 2020</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgBannerTwo} alt="" />
          <div>
            <p>Solution for clean look working space</p>
            <span>10 jan 2020</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </TipsAndTricksContainer>
  )
}
