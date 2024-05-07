import React from "react";
import Slider from "react-slick";
import "../gallery/gallery.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  
  };
  return (
    <div className="slider-container">
      <div className="recent-foto">
        <div className="gallery-title">
          <div className="gall-latest">The Latest Photos</div>
          <div className="gall-amazing">AMAZING PHOTO REPORTAGE</div>
          <hr style={{ width: "5rem" }} />
        </div>
      </div>
      <Slider {...settings}>
        <div className="golfer-show">
          <img src="assets/gf2.jpeg" alt="" />
        </div>
        <div className="golfer-show">
          <img src="assets/gf3.jpeg" alt="" />
        </div>
        <div className="golfer-show">
          <img src="assets/gf4.jpeg" alt="" />
        </div>
        <div className="golfer-show">
          <img src="assets/gf5.jpeg" alt="" />
        </div>
        <div className="golfer-show">
          <img src="assets/gf6.jpeg" alt="" />
        </div>
        <div className="golfer-show">
          <img src="assets/gf8.jpeg" alt="" />
        </div>
      </Slider>

      <div className="recent-ds">
        <img src="assets/bbb.jpg" alt="" />
      </div>
    </div>
  );
}

export default MultipleItems;