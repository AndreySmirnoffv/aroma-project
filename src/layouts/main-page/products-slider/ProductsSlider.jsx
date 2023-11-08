import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import firstImage from '../../../assets/img/main-page/main-page-product-0.png'
import secondImage from '../../../assets/img/main-page/main-page-product-1.png'
import thirdImage from '../../../assets/img/main-page/main-page-product-2.png'
import fourthImage from '../../../assets/img/main-page/main-page-product-3.png'
import fifthImage from '../../../assets/img/main-page/main-page-product-4.png'
// import "swiper/swiper-bundle.min.css";
import './products-slider.sass'

const ProductsSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={6}
      slidesPerView={3}
      navigation
      pagination={{clickable: true}}
    >
      <section className="section-sliderwrapper">
        <div className="swiper">
          <div className="swiper-wrapper">
            <SwiperSlide>
                <img className="img" src={firstImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={secondImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={thirdImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={fourthImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={fifthImage} alt="" />
            </SwiperSlide>
          </div>
        </div>
      </section>
    </Swiper>
  );
}

export default ProductsSlider;