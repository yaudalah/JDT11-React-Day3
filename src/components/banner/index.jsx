import { Carousel } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Carousel autoplay dotPosition={'top'} fade className="my-5 mx-12 mt-24">
      <div className="banner__content-style">
        <img src="https://picsum.photos/450/?random=6" alt="lorem ipsum" />
      </div>
      <div className="banner__content-style">
        <img src="https://picsum.photos/450/?random=3" alt="lorem ipsum" />
      </div>
      <div className="banner__content-style">
        <img src="https://picsum.photos/450/?random=2" alt="lorem ipsum" />
      </div>
      <div className="banner__content-style">
        <img src="https://picsum.photos/450/?random=1" alt="lorem ipsum" />
      </div>
    </Carousel>
  );
};

export default Banner;
