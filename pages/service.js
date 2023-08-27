//import NextLink from "next/link";
import { Text, Heading, Box, Divider, Stack, Image, Center } from "@chakra-ui/react";
import React, { useState, useEffect } from "react"; //중괄호 내용 삽입 , { useState, useEffect }
import { Link as ScrollLink } from "react-scroll"; //버튼을 누르면 위로 이동하는 애니메이션 추가 예정
import styles from "../public/login_func/css/service-style.css";
//import styles from '../뭐시기.css' //스타일 css 파일 불러오기

//야매 도전
const service = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 2 / 3) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

//const service = () => {
    return (
        <div>
            <Center h="10vh">
                <Heading size="2xl" mt="30px">
                    우리가 Stage Play를 만들었어요 &#x1F600;
                </Heading>
            </Center>
            <Divider mt={8} mb={4} />
            <Center h="6vh">
                <Text>개발자를 클릭하면 개발자 깃허브 주소로 갈 수 있어요</Text>
            </Center>
            <br />
            <Box textAlign="left">
                <Stack direction="row" h="80px">
                    <Text fontSize="50px" fontWeight="bold" mr="20px">
                        Manager
                    </Text>
                    <Divider orientation="vertical" />
                    <Text fontSize="20px">
                        <br />
                        (각 부서별 역할 적는 곳)
                    </Text>
                </Stack>
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                    <Text fontSize="40px" mr="3px">채준혁</Text>
                    <Text mt="5px" fontSize="20px">
                        "너무 재미있어요"
                    </Text>
                <br />
                <br />
                <Stack direction="row" h="80px">
                    <Text fontSize="50px" fontWeight="bold" mr="20px">
                        Front
                    </Text>
                    <Divider orientation="vertical" />
                    <Text fontSize="20px">
                        <br />
                        (각 부서별 역할 적는 곳)
                    </Text>
                </Stack>
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                <Text fontSize="30px">
                    <a href="https://github.com/wwmmIIll">김준서</a>
                </Text>{" "}
                {/*<<<<<<<<<<<<개인 깃허브 주소 */}
                <Text mt="5px" fontSize="20px">
                    "재밌노"
                </Text>
                <br />
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                <Text fontSize="30px">박지환</Text>
                <Text mt="5px" fontSize="20px">
                    "너무 재미있어요"
                </Text>
                <br />
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                <Text fontSize="30px">김민경</Text>
                <Text mt="5px" fontSize="20px">
                    "너무 재미있어요"
                </Text>
                <br />
                <br />
                <Stack direction="row" h="80px">
                    <Text fontSize="50px" fontWeight="bold" mr="20px">
                        Backend
                    </Text>
                    <Divider orientation="vertical" />
                    <Text fontSize="20px">
                        <br />
                        (각 부서별 역할 적는 곳)
                    </Text>
                </Stack>
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                <Text fontSize="30px">전민혁</Text>
                <Text mt="5px" fontSize="20px">
                    "너무 재미있어요"
                </Text>
                <br />
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                <Text fontSize="30px">전채린</Text>
                <Text mt="5px" fontSize="20px">
                    "너무 재미있어요"
                </Text>
                <br />
                <br />
                <Stack direction="row" h="80px">
                    <Text fontSize="50px" fontWeight="bold" mr="20px">
                        DB
                    </Text>
                    <Divider orientation="vertical" />
                    <Text fontSize="20px">
                        <br />
                        (각 부서별 역할 적는 곳)
                    </Text>
                </Stack>
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                <Text fontSize="30px">윤태성</Text>
                <Text mt="5px" fontSize="20px">
                    "너무 재미있어요"
                </Text>
                <br />
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                <Text fontSize="30px">채준혁</Text>
                <Text mt="5px" fontSize="20px">
                    "너무 재미있어요"
                </Text>
                <br />
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                <Text fontSize="30px">최인서</Text>
                <Text mt="5px" fontSize="20px">
                    "너무 재미있어요"
                </Text>
                <br />
                <br />
                <Stack direction="row" h="80px">
                    <Text fontSize="50px" fontWeight="bold" mr="20px">
                        Server
                    </Text>
                    <Divider orientation="vertical" />
                    <Text fontSize="20px">
                        <br />
                        (각 부서별 역할 적는 곳)
                    </Text>
                </Stack>
                <Image
                 src="https://bit.ly/dan-abramov"
                 alt="사진"
                 borderRadius="full"
                 boxSize="150px"
                 mt="center"
                />
                <Text fontSize="30px">이준혁</Text>
                <Text mt="5px" fontSize="20px">
                    "너무 재미있어요"
                </Text>
            </Box> {/*/스크롤 버튼 추가해야 함 -> css 파일 필요 */}
              
                <center id="top" mt="20px">
                    <ScrollLink
                        to="top"
                        smooth={true}
                        duration={500}
                    >
                        TOP
                    </ScrollLink>
                </center> 
                {showScrollButton && (
                <div>
                    <button id="back-to-top" onClick={scrollToTop}>
                        Back to Top
                    </button>
                </div>
              )}
        </div>
    );
};

export default service;
