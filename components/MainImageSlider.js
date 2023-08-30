import { Box, Center, Container, Flex } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
// import Image from 'next/image'
import { Image } from "@chakra-ui/react";

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
                    }, 5000);
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
            
            position={"Center"}
            justifyContent={"Center"}
            textAlign={"Center"}
            W="100%"
            mb={10}
            >
                <Box
                    ref={sliderRef}
                    className="keen-slider"
                >
                    <Box className="keen-slider__slide number-slide1">
                        <Image
                            src="/asset/image/ImageSlider/Acting.png"
                            alt="Dan Abramov"
                            w={"100%"}
                        />
                    </Box>
                    <Box className="keen-slider__slide number-slide2">
                        <Image
                            src="/asset/image/ImageSlider/Acting.png"
                            alt="Dan Abramov"
                            w={"100%"}
                        />
                    </Box>
                    {/* <div className="keen-slider__slide number-slide1">
                    
                    <Images
                    src="/asset/image/ImageSlider/Acting.png"
                    alt='cwulogo'
                    borderRadius="10"
                    width="600"
                    height="300"
                    />
                    </div>*/}
                </Box>
            </Box>
    );
};
export default ImageSlider;
