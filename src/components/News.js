import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

const Item1 = () => {
  return (
    <div className="caro-item caro-item1 text-white">
      <h3 className="pl-5 text-white text-sm pt-5"> August 2, 2021</h3>
      <p className="text-l pl-5 pt-10">How to increase your ROI</p>
      <p className="text-l pl-5">through modern SEO</p>
      <div className="flex justify-between px-5 pt-20 align-center">
        <a href="/" className="decoration-0 text-sm">
          READ MORE <i className="fas fa-arrow-right"></i>
        </a>
        <a href="/" className="decoration-0 text-sm">
          <i className="fas fa-share"></i>
        </a>
      </div>
    </div>
  );
};

const Item2 = () => {
  return (
    <div className="caro-item caro-item2 text-white">
      <h3 className="pl-5 text-white text-sm pt-5"> August 2, 2021</h3>
      <p className="text-l pl-5 pt-10">How to increase your ROI</p>
      <p className="text-l pl-5">through modern SEO</p>
      <div className="flex justify-between px-5 pt-20 align-center">
        <a href="/" className="decoration-0 text-sm">
          READ MORE <i className="fas fa-arrow-right"></i>
        </a>
        <a href="/" className="decoration-0 text-sm">
          <i className="fas fa-share"></i>
        </a>
      </div>
    </div>
  );
};

const Item3 = () => {
  return (
    <div className="caro-item caro-item3 text-white">
      <h3 className="pl-5 text-white text-sm pt-5"> August 2, 2021</h3>
      <p className="text-l pl-5 pt-10">How to increase your ROI</p>
      <p className="text-l pl-5">through modern SEO</p>
      <div className="flex justify-between px-5 pt-20 align-center">
        <a href="/" className="decoration-0 text-sm">
          READ MORE <i className="fas fa-arrow-right"></i>
        </a>
        <a href="/" className="decoration-0 text-sm">
          <i className="fas fa-share"></i>
        </a>
      </div>
    </div>
  );
};

const Item4 = () => {
  return (
    <div className="caro-item caro-item4 text-white">
      <h3 className="pl-5 text-white text-sm pt-5"> August 2, 2021</h3>
      <p className="text-l pl-5 pt-10">How to increase your ROI</p>
      <p className="text-l pl-5">through modern SEO</p>
      <div className="flex justify-between px-5 pt-20 align-center">
        <a href="/" className="decoration-0 text-sm">
          READ MORE <i className="fas fa-arrow-right"></i>
        </a>
        <a href="/" className="decoration-0 text-sm">
          <i className="fas fa-share"></i>
        </a>
      </div>
    </div>
  );
};

const News = () => (
  <div className="news-section">
    <div className="services-header text-center pt-5 pb-20">
      <h1 className="text-5xl pt-3 pb-3 font-bold text-black">LATEST NEWS</h1>
      <p className="font-normal text-sm text-black">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </div>
    <Carousel
      className="carousel-wrap"
      show={3}
      slide={3}
      swiping={true}
      transition={0.5}
    >
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </Carousel>
  </div>
);

export default News;
