"use client";
import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";

function Hero() {
  const settings: Settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    initialSlide: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    speed: 200,
    autoplaySpeed: 2500,
  };
  return (
    <div className=" w-full">
      <Slider {...settings}>
        <div>
          <Image
            src="/images/banner-1.jpg"
            alt="Banner 1"
            height={100}
            width={1000}
            className="object-cover rounded-md h-full w-full"
          />
        </div>
        <div>
          <Image
            src="/images/banner-2.jpg"
            alt="Banner 2"
            height={100}
            width={1000}
            className="object-cover rounded-md h-full w-full"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
