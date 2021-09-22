import React from "react";
import Slider from "react-slick";
import CPoster from "../Poster/Cposter.components.jsx";
import settings from "../../config/Poster.config";

const PosterSlider = (props) => {
    return (
        <>
        <div className="flex flex-col pl-4 pt-10 pb-2">
            <h3 className={
                `text-2xl font-bold ${
                    props.isDark ? "text-white": "text-black"
                }`
                }>
                {props.title}
            </h3>
            <p className={
                `text-sm ${
                    props.isDark ? "text-white": "text-black"
                }`
            }>
                {props.subtitle}
            </p>
        </div>
        <Slider {...settings}>
        {
            props.images.map((image) => (
                <CPoster {...image} isDark={props.isDark} isCircle={props.isCircle} />
            ))
        }
        </Slider>
        </>
    );
}

export default PosterSlider;