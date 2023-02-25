import { Box, chakra, Container, useColorModeValue, Button, Input, Flex,} from '@chakra-ui/react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React from 'react'
import Image from 'next/image'

const Images = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})


const ImageSlider = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    return (
        <>
                <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    
                    <Images
                    src="/asset/image/ImageSlider/Acting.png"
                    alt='cwulogo'
                    borderRadius="10"
                    width="600"
                    height="200"
                    />
                </div>
                <div className="keen-slider__slide number-slide1">
                    
                    <Images
                    src="/asset/image/ImageSlider/Broadcasting.png"
                    alt='cwulogo'
                    borderRadius="10"
                    width="600"
                    height="200"
                    />
                </div>
                <div className="keen-slider__slide number-slide1">
                    
                    <Images
                    src="/asset/image/ImageSlider/Musical.png"
                    alt='cwulogo'
                    borderRadius="10"
                    width="600"
                    height="200"
                    />
                </div>
                </div>
        </>
    )
  }
  export default ImageSlider