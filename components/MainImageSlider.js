import {  Box, Image } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
// import Image from 'next/image'


// const Images = chakra(Image, {
//     shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
// })

const ImageSlider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            spacing: 32,
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 2000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );
    return (
        <Box
        w="100%"
        display= "flex"
        position= "center"
        justifyContent= "center"
        textAlign= "center"
        >
            <div
                ref={sliderRef}
                className="keen-slider"
                style={{ width: "100%"}}
            >
                <div className="keen-slider__slide number-slide1">
                    <Image
                        src="https://nextstagefolder1.s3.ap-northeast-2.amazonaws.com/Acting.png"
                        alt="Dan Abramov"
                        borderRadius={"10"}
                        style={{ maxWidth: "100%" }}
                    />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Image
                        src="https://nextstagefolder1.s3.ap-northeast-2.amazonaws.com/Acting.png"
                        alt="Dan Abramov"
                        borderRadius={"10"}
                        style={{ maxWidth: "100%" }}
                    />
                </div>
            </div>
        </Box>
    );
};
export default ImageSlider;
