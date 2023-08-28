import React, { useState, useEffect } from "react";
import {
  Box, Button, Text, Stack, Flex, Image, TableContainer, Table, Tfoot, Tr,
  Th, Input, Modal, ModalContent, ModalCloseButton, ModalHeader,
  ModalFooter, ModalBody, useDisclosure, Center
} from "@chakra-ui/react";

const Actor = () => {
  // 상태 변수 설정
  const [actors, setActors] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editableActor, setEditableActor] = useState({ name: "", department: "", introduction: "", imageUrl: "", });
  const [isEditing, setIsEditing] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 배우 데이터 가져오기
  useEffect(() => {
    fetch("/api/actors")
      .then((response) => response.json())
      .then((data) => setActors(data))
      .catch((error) => console.error(error));
  }, []);

  // 입력 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableActor(prevActor => ({ ...prevActor, [name]: value }));
  };

  // 배우 추가 핸들러
  const handleAddActor = () => {
    if (!editableActor.name || !editableActor.department || !editableActor.introduction) return;

    fetch("/api/ActorEdit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editableActor),
    })
      .then((response) => response.json())
      .then((data) => {
        setActors(prevActors => [...prevActors, data]);
        setEditableActor({ name: "", department: "", introduction: "", imageUrl: "", });
        setIsFormVisible(false);
      })
      .catch((error) => console.error(error));
  };

  // 배우 수정 핸들러
  const handleEdit = (actor) => {
    setEditableActor(actor);
    setIsEditing(true);
  };

  // 저장 핸들러
  const handleSave = () => {
    fetch(`/api/ActorEdit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editableActor),
    })
      .then((response) => response.json())
      .then((data) => {
        setActors(prevActors =>
          prevActors.map(actor => actor.actor_key === data.actor_key ? data : actor)
        );
        setEditableActor({ name: "", department: "", introduction: "", imageUrl: "", });
      })
      .catch((error) => console.error(error));
  };

  // 텍스트 줄임
  const truncateText = (text, maxLength) => text.length <= maxLength ? text : text.substring(0, maxLength) + '...';

  // 배우 삭제 핸들러
  const handleDelete = (actor) => {
    fetch(`/api/ActorEdit`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(actor),
    })
      .then(() => {
        const updatedActors = actors.filter(a => a.actor_key !== actor.actor_key);
        setActors(updatedActors);
      })
      .catch((error) => console.error(error));
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      fetch("/api/uploadImage", { method: "POST", body: formData })
        .then((response) => response.json())
        .then((data) => setEditableActor(prevActor => ({ ...prevActor, imageUrl: data.imageUrl })))
        .catch((error) => console.error(error));
    }
  };

  return (
    <Box mt="40px" border="1px solid">
      <Text ml="50px" fontSize="30px">배우 목록</Text>
      <Button ml="50px" onClick={() => setIsFormVisible(true)}>배우 추가</Button>

      {isFormVisible && (
        <Box mt="20px">
          <Stack spacing="10px">
            {["name", "department", "introduction", "imageUrl"].map((field, index) => (
              <Input
                key={index}
                type="text"
                name={field}
                placeholder={field}
                value={editableActor[field]}
                onChange={handleInputChange}
              />
            ))}
          </Stack>
          <Button colorScheme="blue" size="sm" onClick={handleAddActor}>저장</Button>
        </Box>
      )}

      <Stack ml={{ base: "0", md: "20px" }}>
        <Flex flexWrap="wrap" gap="5px" maxHeight="1000px" overflowY="auto">
          {actors.map(actor => (
            <Box key={actor.id} flex={{ base: "1 1 100%", sm: "1 1 50%", md: "1 1 33.33%", lg: "1 1 25%" }} mb="20px">
              <Flex direction="column" alignItems="center">
                <Center mt="10px">
                  <Image src={actor.imageUrl || "https://bit.ly/dan-abramov"} alt="No image" borderRadius="full" boxSize="100px" onClick={onOpen} />
                </Center>
                <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
                  <ModalContent>
                    <ModalHeader>배우 어쩌구</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Image src={actor.imageUrl || "https://bit.ly/dan-abramov"} alt="No image" borderRadius="full" boxSize="100px" mt="center" onClick={onOpen} />
                      <TableContainer ml="40px">
                        <Table variant="simple">
                          <Tfoot>
                            {["name", "department", "introduction"].map((field, index) => (
                              <Tr key={index}>
                                <Th>{field}</Th>
                                <Th><Text isTruncated>{truncateText(actor[field], 10)}</Text></Th>
                              </Tr>
                            ))}
                          </Tfoot>
                        </Table>
                      </TableContainer>
                    </ModalBody>
                  </ModalContent>
                </Modal>
                {/* 배우 정보 */}
                <TableContainer ml="40px">
                  <Table variant="simple">
                    <Tfoot>
                      {["name", "department", "introduction"].map((field, index) => (
                        <Tr key={index}>
                          <Th>{field}</Th>
                          <Th>
                            {isEditing && editableActor === actor ? (
                              <Input type="text" value={editableActor[field]} onChange={handleInputChange} name={field} />
                            ) : (
                              <Text isTruncated>{truncateText(actor[field], 10)}</Text>
                            )}
                          </Th>
                        </Tr>
                      ))}
                    </Tfoot>
                  </Table>
                </TableContainer>
                {/* 편집, 저장, 삭제 버튼 */}
                <Stack spacing="10px" direction="row">
                  {isEditing && editableActor === actor ? (
                    <Button onClick={handleSave} colorScheme="blue">저장</Button>
                  ) : (
                    <Button onClick={() => handleEdit(actor)}>편집</Button>
                  )}
                  <Button onClick={() => handleDelete(actor)} colorScheme="red">삭제</Button>
                  <Button>
                    <Input type="file" onChange={handleImageUpload} />
                  </Button>
                </Stack>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
};

export default Actor;
