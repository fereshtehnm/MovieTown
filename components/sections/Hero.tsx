import React from "react";
import Image from "next/image";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text_container">
        <h1 className="hero__title"> Find every movie here!</h1>
        <p className="hero__subtitle">all about cinema...</p>
        
        <CustomButton
        title="Explore more"
        containerStyles="hero__button" 
        />
      </div>

      <div className="hero__image_container">
        <div className="hero__image">
          <Image
            src="/movie-hero1.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image_overlay" />

      </div>
    </div>
  );
};

export default Hero;
