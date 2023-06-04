import {
    Box,
    Button,
    Text,
    Stack,
    Flex,
    Image,
    TableContainer,
    Table,
    Tfoot,
    Tr,
    Th,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const actor = () => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch("/api/actors")
        .then((response) => response.json())
        .then((data) => setActors(data))
        .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <Text ml="50px">배우를 한 번에 관리하는 페이지입니다.</Text>
            <Box mt="40px" border="1px solid">
                <br />
                <Text ml="50px" fontSize="30px">
                    배우 목록
                </Text>

                <br />

                <Button ml="50px">배우 추가</Button>
                <Button ml="20px">일괄 삭제</Button>

                <Stack ml="50px">

                {actors.map((actor) => (
                    <Box py={10}>
                        <Flex>
                            <Image
                                src="https://bit.ly/dan-abramov"
                                alt="No image"
                                borderRadius="full"
                                boxSize="100px"
                                mt="30px"
                            />

                            <TableContainer ml="30px">
                                <Table variant="simple">
                                    <Tfoot>
                                        <Tr>
                                            <Th>이름</Th>
                                            <Th>{actor.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actor.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actor.introduction}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소속 공연</Th>
                                            <Th></Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>

                            <Box mt="60px">
                                <Button ml="20px" mr="10px">
                                    편집
                                </Button>
                                <Button>삭제</Button>
                            </Box>
                        </Flex>
                    </Box>
                ))}  

                {actors.map((acotr) => (
                    <Box py={10}>
                        <Flex>
                            <Image
                                src="https://bit.ly/dan-abramov"
                                alt="No image"
                                borderRadius="full"
                                boxSize="100px"
                                mt="30px"
                            />
                            <TableContainer ml="30px">
                                <Table variant="simple">
                                    <Tfoot>
                                        <Tr>
                                            <Th>이름</Th>
                                            <Th>{actor.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actor.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actor.introduction}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소속 공연</Th>
                                            <Th></Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>

                            <Box mt="60px">
                                <Button ml="20px" mr="10px">
                                    편집
                                </Button>
                                <Button>삭제</Button>
                            </Box>
                        </Flex>
                    </Box>
                ))}

                {actors.map((actor) => (
                    <Box py={10}>
                        <Flex>
                            <Image
                                src="https://bit.ly/dan-abramov"
                                alt="No image"
                                borderRadius="full"
                                boxSize="100px"
                                mt="30px"
                            />
                            <TableContainer ml="30px">
                                <Table variant="simple">
                                    <Tfoot>
                                        <Tr>
                                            <Th>이름</Th>
                                            <Th>{actor.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actor.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actor.introduction}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소속 공연</Th>
                                            <Th></Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>
                            <Box mt="60px">
                                <Button ml="20px" mr="10px">
                                    편집
                                </Button>
                                <Button>삭제</Button>
                            </Box>
                        </Flex>
                    </Box>
                ))}

                {actors.map((actor) => (
                    <Box py={10}>
                        <Flex>
                            <Image
                                src="https://bit.ly/dan-abramov"
                                alt="No image"
                                borderRadius="full"
                                boxSize="100px"
                                mt="30px"
                            />
                            <TableContainer ml="30px">
                                <Table variant="simple">
                                    <Tfoot>
                                        <Tr>
                                            <Th>이름</Th>
                                            <Th>{actor.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actor.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actor.introduction}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소속 공연</Th>
                                            <Th></Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>
                            <Box mt="60px">
                                <Button ml="20px" mr="10px">
                                    편집
                                </Button>
                                <Button>삭제</Button>
                            </Box>
                        </Flex>
                    </Box>
                ))}

                {actors.map((actor) => (
                    <Box py={10}>
                        <Flex>
                            <Image
                                src="https://bit.ly/dan-abramov"
                                alt="No image"
                                borderRadius="full"
                                boxSize="100px"
                                mt="30px"
                            />
                            <TableContainer ml="30px">
                                <Table variant="simple">
                                    <Tfoot>
                                        <Tr>
                                            <Th>이름</Th>
                                            <Th>{actor.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actor.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actor.introduction}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소속 공연</Th>
                                            <Th></Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>

                            <Box mt="60px">
                                <Button ml="20px" mr="10px">
                                    편집
                                </Button>
                                <Button>삭제</Button>
                            </Box>
                        </Flex>
                    </Box>
                ))}
                </Stack>
            </Box>
        </div>
    );
};

export default actor;
