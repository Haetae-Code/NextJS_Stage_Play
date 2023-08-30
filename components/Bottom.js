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

    const { path } = props;

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
        <Container>
            <Divider my={5} />
                <Box display="flex">
                    <div>
                        <Text
                            fontSize="md"
                            fontWeight="bold"
                            textAlign="center"
                        >
                            {notices[currentNoticeIndex]}
                        </Text>
                    </div>
                </Box>

            <Box>
                <Divider my={8} />
                <Flex justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <Button
                            mt={1}

                            fontSize="sm"
                            fontWeight="bold"
                            bg={"transparent"}
                            backgroundColor={null}
                        >
                            <Link color="inactiveColor">
                                대표 번호
                            </Link>
                        </Button>

                        <Button
                            mt={1}
                            fontSize="sm"
                            fontWeight="bold"
                            bg={"transparent"}
                            backgroundColor={null}
                        >
                            <Link color="inactiveColor">서비스 소개</Link>
                        </Button>
                        {/* 관리자 페이지 */}
                        <Button
                            mt={1}
                            fontSize="sm"
                            fontWeight="bold"
                            bg={"transparent"}
                            backgroundColor={null}
                        >
                            <Link
                            color="inactiveColor"
                                href="./admin"
                                path={path}
                            >
                                관리자 페이지
                            </Link>
                        </Button>
                    </Box>
                </Flex>
            </Box>
            <footer style={{ height: "100px" }}>
                {/*페이지 하단 여유 공간*/}
            </footer>
        </Container>
    );
};
