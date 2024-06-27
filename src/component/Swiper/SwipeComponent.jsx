import React from "react";
import "./SwipeComponent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import { EffectFlip } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import { EffectCards } from "swiper/modules";
import AirJordan from "../../assets/Airjordan.png";
import Dunk from "../../assets/Dunk.png";
import Blazer from "../../assets/Blazer.png";
import AirForce from "../../assets/Airforce.png";
import GrassPlatform from "../../assets/GrassPlatform.gif";
import RockyPlatform from "../../assets/RockyPlatform.gif";
import ElectroPlatform from "../../assets/ElectroPlatform.gif";
import RoadPlatform from "../../assets/RoadPlatform.gif";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


function SwipeComponent() {
  return (
    <>
      <div className="Bg-container">
        <Swiper
          className="my-swiper"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFlip,
            EffectCreative,
            EffectCards,
          ]}
          navigation={{
            nextEl: ".Next.Btn",
            prevEl: ".Prev.Btn",
          }}
          autoplay={{
              delay:4000,
          }}
          speed={750}
          shortSwipes={true}
          spaceBetween={0}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
        //   pagination={{
        //     dynamicBullets: true,
        //     dynamicMainBullets: 1,
        //     clickable: true,
        //   }}
          // effect='cards'
          // cardsEffect={{
          //     perSlideRotate:10,
          //     slideShadows:false
          // }}
          effect="creative"
          creativeEffect={{
            perspective: true,
            prev: {
              translate: ["-100%", "100%", 0],
              rotate: [45, 0, -45],
            },
            next: {
              translate: ["100%", "100%", 0],
              rotate: [-45, 0, 45],
            },
          }}
        >   <span className="BgText">Bg text</span>
          <SwiperSlide className="slider">
            {/* <video className='ShoePlatform' autoPlay muted playsInline loop>
                    <source src={GrassPlatform}></source>
                </video> */}
            <div className="SwipeDiv">
              <img src={AirJordan} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={GrassPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="SwipeDiv">
              <img src={Dunk} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={RockyPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="SwipeDiv">
              <img src={Blazer} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={RoadPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="SwipeDiv">
              <img src={AirForce} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={ElectroPlatform} alt="" />
            </div>
          </SwiperSlide>
          <div className="Prev Btn">
          <FaArrowLeftLong />
          </div>
          <div className="Next Btn">
          <FaArrowRightLong />
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default SwipeComponent;
