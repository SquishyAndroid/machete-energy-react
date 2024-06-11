import React from "react";
import Slider from "react-slick";
import posts from '../assets/insta_media.json';
import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eight,
  ninth
  ,
} from '../assets';

const getImageOrder = (order) => {
  switch (order) {
    case 1:
      return first
    case 2:
      return second
    case 3:
      return third
    case 4:
      return fourth
    case 5:
      return fifth
    case 6:
      return sixth
    case 7:
      return seventh
    case 8:
      return eight
    case 9:
      return ninth
    default:
      break;
  }
}

export default function InstaSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {posts.map(({ shortcode, caption, order }) => {
        const shortCode = `https://www.instagram.com/p/${shortcode}/?img_index=1`
        return <div className="ig-image-container">
          <a href={shortCode} target="_blank" rel="noreferrer">
            <img src={getImageOrder(order)} alt={caption}/>
          </a>
        </div>
      })}
    </Slider>
  );
}