import React from "react";
import Image from "next/image";

export const metadata = {
  title: "about us",
  description: "information about our team!",
};

const page = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-image-container">
        <Image src="/movie-hero2.png" width={500} height={500} alt="about" />
      </div>
      <div className="about-us-text-container">
        <h2 className="about-us-text">
          About <span className="text-dark-red">Movie Town</span>
        </h2>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          labore quidem expedita nulla ut odio quibusdam sequi. Excepturi totam
          voluptatem maxime natus facere! Totam veniam dicta itaque architecto
          consequuntur inventore officiis, dolor qui, omnis dolores possimus
          placeat illo, repellendus rem sunt magnam voluptatem quaerat sapiente
          saepe incidunt voluptatum ipsam eaque deserunt! Quia, architecto magni
          iure quo pariatur accusantium ea, ipsum omnis, eveniet in itaque
          officia quis voluptatum nulla ullam nostrum! Dolore non reiciendis
          excepturi, pariatur commodi autem in porro ipsam impedit totam quam
          saepe illum. Deleniti quidem blanditiis perspiciatis eligendi laborum
          quasi sint id, nemo inventore sunt incidunt totam in nulla possimus
          dolorum reprehenderit, harum odio doloribus. Sint ullam deserunt
          consequatur voluptas maiores repudiandae error, vel alias consectetur
          numquam aperiam provident nam quas deleniti! Dicta laboriosam repellat
          maxime accusantium possimus sunt, doloribus quia repellendus nihil.
          Nesciunt illum ipsam sapiente veritatis excepturi aliquid. Laboriosam
          consequuntur nisi illo minus totam mollitia aspernatur!
        </p>
      </div>
    </div>
  );
};

export default page;
