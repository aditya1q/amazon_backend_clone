"use client"

import React from 'react';
import { carousel_1, carousel_2, carousel_3, carousel_4, carousel_5, carousel_6, carousel_7, carousel_8, carousel_9 } from '../../../index';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// Create an array of media files
const slides = [
    carousel_1,
    carousel_2,
    carousel_3,
    carousel_4,
    carousel_5,
    carousel_6,
    carousel_7,
    carousel_8,
    carousel_9,
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Auto slide every 3 seconds
    React.useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative h-[350px] overflow-hidden'>
            <div
                className='flex transition-transform duration-500 bg-white'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className='relative w-full h-full flex-shrink-0'>
                        <Image src={slide} alt={`Slide ${index}`} height='100%' width='100%' className='object-contain h-[50%] w-full' />
                    </div>
                ))}
            </div>
            <button
                className='absolute top-1/2 h-[100%] bottom-10 hover:border-2 hover:border-blue-900 px-8 left-0 transform -translate-y-1/2 text-blue-900 rounded-sm '
                onClick={prevSlide}
            >
                <FaChevronLeft size={42}/>
            </button>
            <button
                className='absolute top-1/2 h-[100%] bottom-10 hover:border-2 hover:border-blue-900  px-8 right-0 transform -translate-y-1/2 text-blue-900 rounded-sm'
                onClick={nextSlide}
            >
                <FaChevronRight size={42}/>
            </button>
            <div className="absolute bottom-5 w-full flex justify-center space-x-2 p-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
