import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderImg.scss';


function SliderImg() {

    let setting = 
    {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };



    return (

        <Slider className="slider" {...setting}>

            <div className="slider_div">
            <img src="/images/slider-scale.jpg" alt="" />
            </div>

            <div className="slider_div">
            <img src="/images/slider-scales.jpg" alt="" />
            </div>

            <div className="slider_div">
                <img src="/images/slider-badag.jpg" alt="" />
            </div>

        </Slider>
 
    )
}

export default SliderImg
