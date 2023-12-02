import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

import {
  Box,
  Image,
  Input,
  useBreakpointValue,
  Slider,
  Card,
  CardHeader,
  CardBody,
  Button,
  Text,
  Flex,
  Container
} from "@chakra-ui/react";

//페이지 import
import ImageSlider from "../components/MainImageSlider";
import ColorMode from "../components/ColorModeButton";

export const Iphone = () => {

  const [, /*sliderIndex*/ setSliderIndex] = useState(0);
  const router = useRouter();
  {/*const [isMobile] = useMediaQuery("(max-width: 795px)");*/ }
  const handleReservation = (id) => {
    router.push(`/reservation/${id}`);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: useBreakpointValue({ base: 4, sm: 3 }),
    slidesToScroll: useBreakpointValue({ base: 4, sm: 3 }),
    afterChange: (index) => setSliderIndex(index),
  };
  const [Performance, setPerformance] = useState([]);
  useEffect(() => {
    fetch("/api/Performance")
      .then((response) => response.json())
      .then((data) => setPerformance(data))
      .catch((error) => console.error(error));
  }, []);


  //뮤지컬학과 데이터
  const dataMusical = Performance.map((PerformanceItem) => ({
    id: PerformanceItem.performance_key,
    image: PerformanceItem.img_url,
    title: PerformanceItem.title,
    description: PerformanceItem.address + PerformanceItem.location,
  }));

  //영화과 데이터
  const dataMovie = Performance.map((PerformanceItem) => ({
    id: PerformanceItem.performance_key,
    image: PerformanceItem.img_url,
    title: PerformanceItem.title,
    description: PerformanceItem.address + PerformanceItem.location,
  }));

  return (
    <Container className="iphone">

      {/* navbar */}
      <Flex justifyContent="space-between">
        <Box>
          <Image className="mdi-light-menu" alt="Mdi light menu" src="/asset/image/cwulogo.png" />
        </Box>

        <Box>
          <Image className="Logo" alt="Element" src="/asset/image/cwulogo.png" />
        </Box>

        <Box>
          <ColorMode></ColorMode>
        </Box>
      </Flex>

        {/* search bar */}
        <Box className="mingcute-search-wrapper">
          <Image className="mingcute-search" alt="Mingcute search" src="mingcute-search-2-fill.svg" />
          <Input placeholder="Search"></Input>
        </Box>

      {/* body */}
      <Box className="div">

        {/* imageslider */}
        <Box className="overlap">
          <ImageSlider className="tabler-caret-left tabler-caret-right"></ImageSlider>
          <Box className="text-wrapper">절찬 상영중!</Box>
        </Box>

        {/* musical */}
        <Box className="text-wrapper-3">뮤지컬학과</Box>
        <Image className="line" alt="Line" src="line-1.svg" />
        <Image className="tabler-circle" alt="Tabler circle" src="tabler-circle-chevrons-up.svg" />





        {/* 뮤지컬과 
        <Box className="text-wrapper-3">뮤지컬학과</Box>

        <Image className="line" alt="Line" src="line-1.svg" />
        <Image className="tabler-circle" alt="Tabler circle" src="tabler-circle-chevrons-up.svg" />
        
        <Box className="group">
          <Image className="bi-arrow-left-circle" alt="Bi arrow left circle" src="image.svg" />
          <Image className="bi-arrow-right" alt="Bi arrow right" src="bi-arrow-right-circle-2.svg" />
          <Image className="element" alt="Element" src="image.png" />
          <Image className="img" alt="Element" src="2.png" />
          <Image className="element-2" alt="Element" src="3.png" />
          <Box className="overlap-group-wrapper">
            <Box className="overlap-group">
              <Box className="text-wrapper-2">예매</Box>
            </Box>
          </Box>
          <Box className="group-2">
            <Box className="div-wrapper">
              <Box className="text-wrapper-2">예매</Box>
            </Box>
            <Box className="group-3">
              <Box className="overlap-group">
                <Box className="text-wrapper-2">예매</Box>
              </Box>
            </Box>
          </Box>
        </Box> 
        */}

        {/* 영화과 */}
        <Box className="text-wrapper-4">영화과</Box>
        {/* line */}
        <Image className="line-2" alt="Line" src="line-2.svg" />
        <Box className="group-4">
          <Image className="bi-arrow-left-circle" alt="Bi arrow left circle" src="bi-arrow-left-circle.svg" />
          <Image className="bi-arrow-right" alt="Bi arrow right" src="bi-arrow-right-circle.svg" />
          <Image className="element" alt="Element" src="1-2.png" />
          <Image className="img" alt="Element" src="2-2.png" />
          <Image className="element-2" alt="Element" src="3-2.png" />
          <Box className="overlap-group-wrapper">
            <Box className="overlap-group">
              <Box className="text-wrapper-2">예매</Box>
            </Box>
          </Box>
          <Box className="group-2">
            <Box className="div-wrapper">
              <Box className="text-wrapper-2">예매</Box>
            </Box>
            <Box className="group-3">
              <Box className="overlap-group">
                <Box className="text-wrapper-2">예매</Box>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box className="majesticons-lock-wrapper">
          <Image className="majesticons-lock" alt="Majesticons lock" src="majesticons-lock-line.svg" />
        </Box>
      </Box>
    </Container>
  );
};
export default Iphone;