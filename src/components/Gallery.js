import React from "react";

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="gallery-header text-center pt-5 pb-12">
        <h1 className="text-5xl mt-10 mb-3 pt-4 pb-2 font-bold text-black text-center contact-title">
          FOOD GALLERY
        </h1>
        <p className="text-gray-500 font-normal text-sm">
          Check out our awesome delicacies
        </p>
      </div>
      <div className="grid-container">
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
        <div className="item item4"></div>
        <div className="item item5"></div>
        <div className="item item6"></div>
      </div>
    </div>
  );
};

export default Gallery;
