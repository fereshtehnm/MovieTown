"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero__text_container">
        <h1 className="hero__title">Find every movie here!</h1>
        <p className="hero__subtitle">all about cinema.</p>

        <Link href="/movie">
          <CustomButton
            title="Explore more"
            containerStyles="bg-dark-red text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </Link>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/movie-hero1.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;