import NextLink from "next/link";
import { 
    Container, 
    Box, 
    Flex, 
    Text, 
    Divider,
    Button,
    Link
 } from "@chakra-ui/react";

export const Bottom = (props) => {
  return (
    <Box>
    <Divider my={8} />
    <Container>
      <Box display="flex">
        <div style={{ flex: 1 }}>
          <Text fontSize="md" fontWeight="bold" textAlign="center">
            공지사항: 우천으로 인한 공연 일정 연기 안내
          </Text>
        </div>
      </Box>
    </Container>

    <Box>
      <Divider my={8} />
      <Flex justifyContent="center" mr="100px">
        <Box display="flex" justifyContent="center">
           
          <Button mt={1} ml={90} fontSize="sm" fontWeight="bold" bg={"transparent"} backgroundColor={null}>
              <Link>
                  대표 번호 010-xxxx-xxx
              </Link>
          </Button>
          <Button mt={1} ml={90} fontSize="sm" fontWeight="bold" bg={"transparent"} backgroundColor={null}>
          <Link>
              회사 소개
          </Link>
          </Button>
          <Button mt={1} ml={90} fontSize="sm" fontWeight="bold" bg={"transparent"} backgroundColor={null}>
          <Link>
              서비스 소개
          </Link>
          </Button>
          <Button mt={1} ml={90} fontSize="sm" fontWeight="bold" bg={"transparent"} backgroundColor={null}>
          <Link>
              자주 묻는 질문
          </Link>
          </Button>
          <Button mt={1} ml={90} fontSize="sm" fontWeight="bold" bg={"transparent"} backgroundColor={null}>
          <Link>
              채용
          </Link>
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
