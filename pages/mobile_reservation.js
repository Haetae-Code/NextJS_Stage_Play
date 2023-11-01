import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
//import "./style.css";
import {
  Container,
  Flex,
  Image,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  Input,
  AspectRatio,
  Divider
} from "@chakra-ui/react";
//import ColorMode from "../components/ColorModeButton";
//import KakaoMap from "../../components/kakaomap";

export const Iphone = () => {
    const router = useRouter();
    const { id } = router.query;
    const handleReservationdetail = (id) => {
        router.push(`/reservationdetail/${id}`);
    };

    const [actors, setActors] = useState([]);
    useEffect(() => {
        fetch(`/api/actors/${id}`)
            .then((response) => response.json())
            .then((data) => setActors(data))
            .catch((error) => console.error(error));
    }, [id]);


    const [Performance, setPerformance] = useState([]);
    useEffect(() => {
        fetch(`/api/Performance/${id}`)
            .then((response) => response.json())
            .then((data) => setPerformance(data))
            .catch((error) => console.error(error));
    }, [id]);

    const [Times, setTimes] = useState([]);
    useEffect(() => {
        fetch(`/api/Times/${id}`)
            .then((response) => response.json())
            .then((data) => setTimes(data))
            .catch((error) => console.error(error));
    }, [id]);
    
    for (let i = 0; i < Times.length; i++) {
        const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
        const matchedDay = Times[i].view_date.match(dateRegex);
        Times[i].view_date = matchedDay[1];

        const timeParts = Times[i].view_time.split(':');
        const hour = parseInt(timeParts[0], 10);
        const minute = timeParts.length > 1 ? parseInt(timeParts[1], 10) : "00";
        Times[i].view_time = `${hour}시 ${minute}분`;
      }    

    // Group performance times by date
    const groupedTimes = Times.reduce((acc, time) => {
        const date = time.view_date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(time.view_time);
        return acc;
    }, {});

    return(
        <Container className="iphone">
            <Flex justifyContent={"space-between"}>
            <Image className="mdi-light-menu" alt="Mdi light menu" src="/asset/image/cwulogo.png" />
            <Image className="Logo" alt="Element" src="/asset/image/cwulogo.png" />
            </Flex>

            <Flex>
            <Box className="mingcute-search-wrapper">
          <Image className="mingcute-search" alt="Mingcute search" src="mingcute-search-2-fill.svg" />
          <Input placeholder="Search"></Input>
           </Box>
            </Flex>
            
            <Box className="div">


<Box className="overlap">
<Flex direction="column">
  <Box marginBottom={4} width="100%">
    <AspectRatio ratio={1}>
      <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' objectFit="cover" />
    </AspectRatio>
  </Box>
  <Stack width="100%" spacing={2}>
    <Text className="text-wrapper-6" isTruncated>
      제목: 제목을 길게 한번 적어봤습니다람쥐는고양이
    </Text>
  </Stack>
</Flex>

<Box boxSize="30px"/>
 
<Tabs variant="soft-rounded" colorScheme="blue" defaultIndex={1}>
        <TabList>
          <Tab>공연 정보</Tab>
          <Tab>캐스팅 정보</Tab>
        </TabList>

        <TabPanels>
        <TabPanel>

  <Flex alignItems="center">
  
    <Stack spacing={2}>
      <Text className="text-wrapper-6">공연장소: djelsrk</Text>
      <Text className="text-wrapper-7">공연시간: 13:00~13:00</Text>
      <Text className="text-wrapper-8">공연기간</Text>
      <Text className="text-wrapper-9">장소는 여기임</Text>
    </Stack>
  </Flex>
</TabPanel>

          <TabPanel>
            
          <Stack spacing={4}>
  <Flex alignItems="center">
    <Box marginRight={4}>
      <Image src="이미지_주소_1" alt="프로필 사진" boxSize="50px" />
    </Box>
    <Stack spacing={2} width="100%">
      <Text className="text-wrapper-11">이름: 닝겐</Text>
      <Text className="text-wrapper-12">학과: 인간학과</Text>
      <Text className="text-wrapper-13">소개: 닝겐을 맡음</Text>
    </Stack>
  </Flex>
  <Divider borderColor="gray.200" />
  <Flex alignItems="center">
    <Box marginRight={4}>
      <Image src="이미지_주소_2" alt="프로필 사진" boxSize="50px" />
    </Box>
    <Stack spacing={2} width="100%">
      <Text className="text-wrapper-11">이름: 다른 사람</Text>
      <Text className="text-wrapper-12">학과: 다른 학과</Text>
      <Text className="text-wrapper-13">소개: 다른 사람을 맡음</Text>
    </Stack>
  </Flex>
  {/* 다른 사람들의 정보도 추가 가능 */}
</Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
</Box>
</Box>

    </Container>
    );
};

export default Iphone;