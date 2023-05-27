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
import{} from "react";


const actor = () => {

    return(
      <div>
        <Text ml="50px">배우를 한 번에 관리하는 페이지입니다.</Text>
        <Box mt="40px" border="1px solid">
          <br/>
          <Text ml="50px" fontSize="30px">배우 목록</Text>
          
          <br/>
          

          <Button ml="50px">배우 추가</Button>
          <Button ml="20px">일괄 삭제</Button>

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
                          <Th>채준혁</Th>
                      </Tr>
                      <Tr>
                        <Th>학과</Th>
                        <Th>컴퓨터공학과</Th>
                      </Tr>
                      <Tr>
                        <Th>소개</Th>
                        <Th>컴공 체육부</Th>
                      </Tr>
                      <Tr>
                          <Th>소속 공연</Th>
                          <Th>오페라의 유령</Th>
                        </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>

                <Box mt="60px">
                    <Button ml="20px" mr="10px">
                      편집
                    </Button>
                    <Button>
                      삭제
                    </Button>
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
                          <Th>김준서</Th>
                        </Tr>
                        <Tr>
                          <Th>학과</Th>
                          <Th>컴퓨터공학과</Th>
                        </Tr>
                        <Tr>
                          <Th>소개</Th>
                          <Th>컴공 홍보부</Th>
                        </Tr>
                        <Tr>
                          <Th>소속 공연</Th>
                          <Th>뮤지컬 모시기</Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                  
                  
                  <Box mt="60px">
                    <Button ml="20px" mr="10px">
                      편집
                    </Button>
                    <Button>
                      삭제
                    </Button>
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
                          <Th>김준서</Th>
                        </Tr>
                        <Tr>
                          <Th>학과</Th>
                          <Th>컴퓨터공학과</Th>
                        </Tr>
                        <Tr>
                          <Th>소개</Th>
                          <Th>컴공 홍보부</Th>
                        </Tr>
                        <Tr>
                          <Th>소속 공연</Th>
                          <Th>뮤지컬 모시기</Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                  <Box mt="60px">
                    <Button ml="20px" mr="10px">
                      편집
                    </Button>
                    <Button>
                      삭제
                    </Button>
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
                          <Th>김준서</Th>
                        </Tr>
                        <Tr>
                          <Th>학과</Th>
                          <Th>컴퓨터공학과</Th>
                        </Tr>
                        <Tr>
                          <Th>소개</Th>
                          <Th>컴공 홍보부</Th>
                        </Tr>
                        <Tr>
                          <Th>소속 공연</Th>
                          <Th>뮤지컬 모시기</Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                  <Box mt="60px">
                    <Button ml="20px" mr="10px">
                      편집
                    </Button>
                    <Button>
                      삭제
                    </Button>
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
                          <Th>김준서</Th>
                        </Tr>
                        <Tr>
                          <Th>학과</Th>
                          <Th>컴퓨터공학과</Th>
                        </Tr>
                        <Tr>
                          <Th>소개</Th>
                          <Th>컴공 홍보부</Th>
                        </Tr>
                        <Tr>
                          <Th>소속 공연</Th>
                          <Th>뮤지컬 모시기</Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>

                  <Box mt="60px">
                    <Button ml="20px" mr="10px">
                      편집
                    </Button>
                    <Button>
                      삭제
                    </Button>
                  </Box>
                </Flex>
              </Box>                             
          </Stack>
        </Box>
      </div>
      
    );
}

export default actor;