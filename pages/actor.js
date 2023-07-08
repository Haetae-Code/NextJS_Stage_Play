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
    Input
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const actor = () => {
    const [actors, setActors] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        fetch("/api/actors")
            .then((response) => response.json())
            .then((data) => setActors(data))
            .catch((error) => console.error(error));
    }, []);

    const [newActor, setNewActor] = useState({
        name: "",
        department: "",
        introduction: "",
        performances: [],
        imageUrl: "",
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewActor((prevActor) => ({ ...prevActor, [name]: value }));
      };
    
      const handleAddActor = () => {
        // 필수 항목 입력 확인
        if (!newActor.name || !newActor.department || !newActor.introduction) {
          console.error("필수 항목을 입력하세요.");
          return;
        }
    
        setActors((prevActors) => [...prevActors, newActor]);
        setNewActor({
          name: "",
          department: "",
          introduction: "",
          performances: [],
          imageUrl: "",
        });
        setIsFormVisible(false);
      };
    

    return (
        <div>
            <Text ml="50px">배우를 한 번에 관리하는 페이지입니다.</Text>
            <Box mt="40px" border="1px solid">
                <br />
                <Text ml="50px" fontSize="30px">
                    배우 목록
                </Text>

                <br />

                <Button ml="50px" onClick={() => setIsFormVisible(true)}>배우 추가</Button>
                <Button ml="20px">일괄 삭제</Button>

                {isFormVisible && (
          <Box mt="20px">
            <Text mb="10px">배우 정보 입력:</Text>
            <Input
              type="text"
              name="name"
              placeholder="이름"
              value={newActor.name}
              onChange={handleInputChange}
              mb="10px"
            />
            <Input
              type="text"
              name="department"
              placeholder="학과"
              value={newActor.department}
              onChange={handleInputChange}
              mb="10px"
            />
            <Input
              type="text"
              name="introduction"
              placeholder="소개"
              value={newActor.introduction}
              onChange={handleInputChange}
              mb="10px"
            />
            <Input
              type="text"
              name="imageUrl"
              placeholder="이미지 URL"
              value={newActor.imageUrl}
              onChange={handleInputChange}
              mb="10px"
            />
            <Button colorScheme="blue" size="sm" onClick={handleAddActor}>
              저장
            </Button>
          </Box>
        )}

                <Stack ml="50px">
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
                                            <Th>{actors[0]?.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actors[0]?.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actors[0]?.introduction}</Th>
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
                                            <Th>{actors[1]?.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actors[1]?.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actors[1]?.introduction}</Th>
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
                                            <Th>{actors[2]?.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actors[2]?.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actors[2]?.introduction}</Th>
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
                                            <Th>{actors[3]?.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actors[3]?.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actors[3]?.introduction}</Th>
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
                                            <Th>{actors[4]?.name}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>학과</Th>
                                            <Th>{actors[4]?.department}</Th>
                                        </Tr>
                                        <Tr>
                                            <Th>소개</Th>
                                            <Th>{actors[4]?.introduction}</Th>
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
                </Stack>
            </Box>
        </div>
    );
};

export default actor;
