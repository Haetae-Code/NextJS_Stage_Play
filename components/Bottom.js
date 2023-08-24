import {
    Container,
    Box,
    Flex,
    Text,
    Divider,
    Button,
    Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const notices = ["개발자 노트:", "오늘의 공지사항:", "추후 공지예정:"];

export const Bottom = (props) => {
    const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentNoticeIndex(
                (currentNoticeIndex) =>
                    (currentNoticeIndex + 1) % notices.length
            );
        }, 15000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <Box>
            <Divider my={8} />
            <Container>
                <Box display="flex">
                    <Box flex={1}>
                        <Text
                            fontSize="md"
                            fontWeight="bold"
                            textAlign="center"
                        >
                            {notices[currentNoticeIndex]}
                        </Text>
                    </Box>
                </Box>
            </Container>

            <Box>
                <Divider my={8} />
                <Flex justifyContent="center" >
                    <Box display="flex" justifyContent="center">
                        <Button
                            mt={1}
                            ml={4}
                            fontSize="sm"
                            fontWeight="bold"
                            bg="transparent"
                            color="inactiveColor"
                            _hover={{ textDecoration: 'underline' }}
                        >

                            대표 번호 010-xxxx-xxx

                        </Button>
                        <Button
                            mt={1}
                            ml={4}
                            fontSize="sm"
                            fontWeight="bold"
                            bg="transparent"
                            color="inactiveColor"
                            _hover={{ textDecoration: 'underline' }}
                        >
                            회사 소개
                        </Button>
                        <Button
                            mt={1}
                            ml={4}
                            fontSize="sm"
                            fontWeight="bold"
                            bg="transparent"
                            color="inactiveColor"
                            _hover={{ textDecoration: 'underline' }}
                        >
                            서비스 소개
                        </Button>
                        <Button
                            mt={1}
                            ml={4}
                            fontSize="sm"
                            fontWeight="bold"
                            bg="transparent"
                            color="inactiveColor"
                            _hover={{ textDecoration: 'underline' }}
                        >
                            자주 묻는 질문
                        </Button>

                        <Button
                            mt={1}
                            ml={4}
                            fontSize="sm"
                            fontWeight="bold"
                            bg="transparent"
                            color="inactiveColor"
                            _hover={{ textDecoration: 'underline' }}
                            _focus={{ boxShadow: 'none' }}
                            _active={{ backgroundColor: 'blue.600' }}
                        >
                            건의사항
                        </Button>
                    </Box>
                </Flex>
            </Box>
            <footer style={{ height: "100px" }}>
                {/*페이지 하단 여유 공간*/}
            </footer>
        </Box>
    );
};
