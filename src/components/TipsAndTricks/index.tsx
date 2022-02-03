import { A11y, Navigation, Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import imgBannerTwo from '../../assets/imgBannerTwo.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { TipsAndTricksContainer } from './styles'

export function TipsAndTricks() {

  let width: number = window.screen.width

  return (
    <TipsAndTricksContainer>
      <h2>Tips &amp; Tricks</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        spaceBetween={40}
        slidesPerView={width < 830 ? 1 : 3}
        navigation
        effect='coverflow'
        pagination={{ clickable: true }}
        loop={true}
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
