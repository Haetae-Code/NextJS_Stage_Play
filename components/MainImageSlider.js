import { Container, Box, Image } from "@chakra-ui/react";
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
                    }, 3000);
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
        <Container
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
                        src="/asset/image/ImageSlider/Acting.png"
                        alt="cwulogo"
                        borderRadius={"10"}
                        style={{ maxWidth: "100%" }}
                    />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Image
                        src="/asset/image/ImageSlider/Acting.png"
                        alt="cwulogo"
                        borderRadius={"10"}
                        style={{ maxWidth: "100%" }}
                    />
                </div>
            </div>
        </Container>
    );
};
export default ImageSlider;
