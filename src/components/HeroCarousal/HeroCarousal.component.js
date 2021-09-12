import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import { NextArrow, PrevArrow } from "./Arrows.component"

const HeroCarousal = () => {
    const settingsLg = {
        arrows: true,
        autoplay: true,
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        centerPadding: "300px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const settings = {
        arrows: true,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const images = [
        "https://wallpaperaccess.com/full/1099445.png",
        "https://images8.alphacoders.com/108/1081458.jpg",
        "https://i.ytimg.com/vi/lMEK-MgGxxA/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/One_punch_man_saitama.jpg",
        "https://wallsdesk.com/wp-content/uploads/2016/11/death-note-HD.jpg"
    ]
    
    return (
        <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
            {
                images.map((image) => (
                    <div className="w-full h-60 md:h-96 pt-3">
                        <img src={image} alt={image} className="w-full h-full rounded-md"></img>
                    </div>
                ))
            }
            </HeroSlider>
        </div>

        <div className="hidden lg:block">
            <HeroSlider {...settingsLg}>
            {
                images.map((image) => (
                    <div className="w-full h-96 px-2 pt-3">
                        <img src={image} alt={image} className="w-full h-full rounded-md"></img>
                    </div>
                ))
            }
            </HeroSlider>
        </div>

        
      </>
    );
}

export default HeroCarousal;