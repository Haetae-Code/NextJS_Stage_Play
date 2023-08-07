import React, { useState, useEffect } from "react";
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
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Center
} from "@chakra-ui/react";

const Actor = () => {
    const [actors, setActors] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editableActor, setEditableActor] = useState({
      name: "",
      department: "",
      introduction: "",
      imageUrl: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const{isOpen,onOpen,onClose}=useDisclosure();
  

    useEffect(() => {
      fetch("/api/actors")
        .then((response) => response.json())
        .then((data) => setActors(data))
        .catch((error) => console.error(error));
    }, []);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditableActor((prevActor) => ({ ...prevActor, [name]: value }));
    };
  
    const handleAddActor = () => {
      // 필수 항목 입력 확인
      if (!editableActor.name || !editableActor.department || !editableActor.introduction) {
        console.error("필수 항목을 입력하세요.");
        return;
      }
  
      setActors((prevActors) => [...prevActors, editableActor]);
      setEditableActor({
        name: "",
        department: "",
        introduction: "",
        imageUrl: "",
      });
      setIsFormVisible(false);
    };
  
  
    const handleEdit = (actor) => {
      setEditableActor(actor);
      setIsEditing(true); 
    };

    const handleSave = () => {
      setActors((prevActors) =>
        prevActors.map((actor) =>
          actor === editableActor ? { ...editableActor } : actor
        )
      );
      setEditableActor({
        name: "",
        department: "",
        introduction: "",
        imageUrl: "",
      });
    };

    function truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.substring(0, maxLength) + '...';
      }
    }


    
  return (
    <div>
      <Text ml="50px">배우를 한 번에 관리하는 페이지입니다.</Text>
      <Box mt="40px" border="1px solid">
        <br />
        <Text ml="50px" fontSize="30px">
          배우 목록
        </Text>

        <br />

        <Button ml="50px" onClick={() => setIsFormVisible(true)}>
          배우 추가
        </Button>

        {isFormVisible && (
          <Box mt="20px">
            <Text mb="10px">배우 정보 입력:</Text>
            <Input
              type="text"
              name="name"
              placeholder="이름"
              value={editableActor.name}
              onChange={handleInputChange}
              mb="10px"
            />
            <Input
              type="text"
              name="department"
              placeholder="학과"
              value={editableActor.department}
              onChange={handleInputChange}
              mb="10px"
            />
            <Input
              type="text"
              name="introduction"
              placeholder="소개"
              value={editableActor.introduction}
              onChange={handleInputChange}
              mb="10px"
            />
            <Input
              type="text"
              name="imageUrl"
              placeholder="이미지 URL"
              value={editableActor.imageUrl}
              onChange={handleInputChange}
              mb="10px"
            />
            <Button colorScheme="blue" size="sm" onClick={handleAddActor}>
              저장
            </Button>
          </Box>
        )}

<Stack ml="80px">
        <Flex flexWrap="wrap" gap="5px" maxHeight="1000px" overflowY="auto">
          {actors.map((actor, index) => (
            <Box key={index} py={10} flex="1 1 45%" mt="-20px" ml="40px">
              <Flex>
                <Center mt="10px" >
                <Image
                  src={actor.imageUrl || "https://bit.ly/dan-abramov"}
                  alt="No image"
                  borderRadius="full"
                  boxSize="100px"
                 onClick={onOpen}
                />
                </Center>
                <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
                 <ModalContent>
                  <ModalHeader>배우 어쩌구</ModalHeader>
                  <ModalCloseButton/>
                  <ModalBody>
                  <Image
                  src={actor.imageUrl || "https://bit.ly/dan-abramov"}
                  alt="No image"
                  borderRadius="full"
                  boxSize="100px"
                  mt="center"
                 onClick={onOpen}
                />
                 <TableContainer ml="40px">
                  <Table variant="simple">
                    <Tfoot>
                      <Tr>
                        <Th>이름</Th>
                        <Th>
                           <Text isTruncated> {actor.name}</Text>
                        </Th>
                      </Tr>
                      <Tr>
                        <Th>학과</Th>
                        <Th>
                          <Text isTruncated> {actor.department}</Text>
                        </Th>
                      </Tr>
                      <Tr>
                        <Th>소개</Th>
                        <Th>
                          <Text isTruncated>{actor.introduction}</Text>
                        </Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
                  </ModalBody>
                  <ModalFooter>
                  </ModalFooter>
                  </ModalContent> 
                  </Modal>

                <TableContainer ml="40px">
                  <Table variant="simple">
                    <Tfoot>
                      <Tr>
                        <Th>이름</Th>
                        <Th>
                          {isEditing && editableActor === actor ? (
                            <Input
                              type="text"
                              value={editableActor.name}
                              onChange={handleInputChange}
                              name="name"
                            />
                          ) : (
                            <Text isTruncated> {truncateText(actor.name, 10)}</Text>
                          )}
                        </Th>
                      </Tr>
                      <Tr>
                        <Th>학과</Th>
                        <Th>
                          {isEditing && editableActor === actor ? (
                            <Input
                              type="text"
                              value={editableActor.department}
                              onChange={handleInputChange}
                              name="department"
                            />
                          ) : (
                            <Text isTruncated> {truncateText(actor.department, 8)}</Text>
                          )}
                        </Th>
                      </Tr>
                      <Tr>
                        <Th>소개</Th>
                        <Th>
                          {isEditing && editableActor === actor ? (
                            <Input
                              type="text"
                              value={editableActor.introduction}
                              onChange={handleInputChange}
                              name="introduction"
                            />
                          ) : (
                            <Text isTruncated>{truncateText(actor.introduction, 8)}</Text>
                          )}
                        </Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>

                <Box mt="60px">
                  {isEditing && editableActor === actor ? (
                    <>
                      <Button ml="20px" mr="10px" onClick={handleSave}>
                        저장
                      </Button>
                    </>
                  ) : (
                    <Button ml="20px" mr="10px" onClick={() => handleEdit(actor)}>
                      편집
                    </Button>
                  )}
                </Box>
              </Flex>
            </Box>

          ))}
        </Flex>
      </Stack>
      </Box>

    </div>
  );
};

export default Actor;