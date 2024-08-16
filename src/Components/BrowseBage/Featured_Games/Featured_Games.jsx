import React from "react";
import { SectionTitle } from "../../components_links";
import Card from "./Card";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa";

export default function Featured_Games() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className="arrow arrow-right">

          <FaAngleRight
            className={className}
            onClick={onClick}
            />
            </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
        <div className="arrow arrow-left">
          <FaAngleLeft
            className={className}
            onClick={onClick}
            />
        </div>
        );
      }
      
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
  function handel_cursor(cards) {
      let isDragging = false;
    let element = cards.currentTarget;

    element.addEventListener("mousedown", _ => {
      isDragging = true;
    });
    element.addEventListener("mouseup", _ => {
      isDragging = false;
    });
    element.addEventListener("mousemove", e => {
      if (isDragging) {
        element.classList.add("cursor_grabbing");
      } else {
        element.classList.remove("cursor_grabbing");
      }
    });
  }
  return (
    <div className="Featured_Games">
      <SectionTitle title_light="Featured" title_color="gams" />
      <div
        className="cards"
        id="cards_featured_games"
        onMouseEnter={cards => handel_cursor(cards)}
      >
        <Slider {...settings}>
          <Card
            img="../../../../public/Browse/Featured_Games/featured-01.jpg"
            title="cs-go"
            rating="4.8"
            download_text="249K Download"
            download="2.4m"
          />
          <Card
            img="../../../../public/Browse/Featured_Games/featured-02.jpg"
            title="cs-go"
            rating="4.8"
            download_text="249K Download"
            download="2.4m"
          />
          <Card
            img="../../../../public/Browse/Featured_Games/featured-03.jpg"
            title="cs-go"
            rating="4.8"
            download_text="249K Download"
            download="2.4m"
          />
        </Slider>
      </div>

      
    </div>
  );
}
