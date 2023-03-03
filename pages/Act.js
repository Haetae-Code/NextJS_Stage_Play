import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra,
    Flex,
    Center,
    Image,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";

const Page1 = () => {
    return (
        <Container>
            <Container pt={3} m1={1} maxW="md">
                <Box flexGrow={1} pl="75" display={"flex"}>
                    <Heading as="h1" variant="page-title" pt={10}>
                        연극영화과
                    </Heading>
                    <Box
                        as="button"
                        borderRadius="md"
                        color="white"
                        px={4}
                        h={30}
                        pl="100"
                        pt={14}
                    >
                        home
                    </Box>
                </Box>
            </Container>
            <Container pt={20} m1={100} maxw="xl">
                <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
                        <Tab>학과소개</Tab>
                        <Tab>교수진소개</Tab>
                        <Tab>교육과정안내</Tab>
                    </TabList>
                    <TabPanels>
                        {/* 학과소개 */}
                        <TabPanel>
                            <Box boxSize="large">
                                <Image
                                    src="\asset\image\ImageSlider\Acting.png"
                                    fit="cover"
                                />
                            </Box>
                            <Box boxSize="large">
                                연극예술학과는 연기예술전공과 무대미술전공으로
                                이루어져 있습니다. 공연예술, 방송, 영화, 미디어
                                분야에서 요구되는 전문 연기자와 스태프 양성을
                                목표로 1997년에 창설된 연극예술학과는 특화된
                                커리큘럼과 미래지향적 교육을 통해 21세기형
                                연기자와 스태프 배출을 목표로 하고 있습니다.
                                또한 중등학교 2급 정교사자격증 및 문화예술교육사
                                2급 자격증을 취득할 수 있는 과정을 개설하고 있어
                                학생들이 졸업 후 교육자의 길로 나갈 수 있도록
                                지도합니다.
                            </Box>
                        </TabPanel>
                        {/* 교수진소개 */}
                        <TabPanel>
                            <p>쏼라쏼라~</p>
                        </TabPanel>
                        {/* 교육과정안내 */}
                        <TabPanel>
                            <p>쏼1라~쏼2라~쏼3라~</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </Container>
    );
};

export default Page1;
