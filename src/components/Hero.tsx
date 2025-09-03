"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

export default function Hero() {
  const projects = [
    {
      title: "Big Project",
      image: "https://picsum.photos/id/1011/800/400",
    },
    {
      title: "Small Project 1",
      image: "https://picsum.photos/id/1015/400/300",
    },
    {
      title: "Small Project 2",
      image: "https://picsum.photos/id/1016/400/300",
    },
    {
      title: "Another Big Project",
      image: "https://picsum.photos/id/1019/800/400",
    },
    {
      title: "Small Project 3",
      image: "https://picsum.photos/id/1021/400/300",
    },
    {
      title: "Small Project 4",
      image: "https://picsum.photos/id/1022/400/300",
    },
  ];

  return (
    <Swiper
      navigation // enable arrows
      modules={[Navigation]}
      className="mySwiper"
    >
      {/* Slide 1 (1 big + 2 small) */}
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[0].image} alt={projects[0].title} />
          </div>
          <div className="row small">
            <img src={projects[1].image} alt={projects[1].title} />
            <img src={projects[2].image} alt={projects[2].title} />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <div className="row big">
            <img src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="row small">
            <img src={projects[4].image} alt={projects[4].title} />
            <img src={projects[5].image} alt={projects[5].title} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
