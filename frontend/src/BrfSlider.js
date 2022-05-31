import React, { useState } from 'react';
import { BrfData } from './BrfData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Slider.css';

const BrfSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = BrfData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // If notArray.isArray for the data slides or
    // slides.lentgth return null;
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {BrfData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="Guldmyrans bilder" className="image" />
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default BrfSlider;