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
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Center,
  useMediaQuery,
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

    const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");

 
    
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
    
      fetch("/api/ActorEdit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editableActor),
      })
        .then((response) => response.json())
        .then((data) => {
          setActors((prevActors) => [...prevActors, data]);
          setEditableActor({
            name: "",
            department: "",
            introduction: "",
            imageUrl: "",
          });
          setIsFormVisible(false);
        })
        .catch((error) => console.error(error));
    };
  
    const handleEdit = (actor) => {
      setEditableActor(actor);
      setIsEditing(true); 
    };

    const handleSave = () => {
      fetch(`/api/ActorEdit`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editableActor),
      })
        .then((response) => response.json())
        .then((data) => {
          setActors((prevActors) =>
            prevActors.map((actor) => (actor.actor_key === data.actor_key ? data : actor))
          );
          setEditableActor({
            name: "",
            department: "",
            introduction: "",
            imageUrl: "",
          });
        })
        .catch((error) => console.error(error));
    };

    function truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.substring(0, maxLength) + '...';
      }
    }

  
            const handleDelete = (actor) => {
              const confirmDelete = window.confirm("정말로 삭제 하시겠습니까?");
              if (confirmDelete) {
                fetch(`/api/ActorEdit`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(actor),
                })
                .then(() => {
                  const updatedActors = actors.filter((a) => a.actor_key !== actor.actor_key);
                  setActors(updatedActors);
                })
                .catch((error) => console.error(error));
            };
          }
      

    const handleImageUpload = (e) => {
      const selectedImage = e.target.files[0];
      if (selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage); // "image"는 서버에서 이미지를 업로드하는 필드 이름
        fetch("/api/uploadImage", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            const imageUrl = data.imageUrl; // 서버에서 반환한 이미지 URL
            setEditableActor((prevActor) => ({ ...prevActor, imageUrl }));
          })
          .catch((error) => console.error(error));
      }
    };

    

  return (
    <div>

    
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

      <Stack ml={{ base: "0", md: "20px" }}>
        <Flex flexWrap="wrap" gap={{ base: "10px", md: "20px" }} justifyContent="flex-start" alignItems="stretch" mt="20px">
          {actors.map((actor) => (
                          <Box
                          key={actor.id}
                          flex={
                            isSmallerThan500
                              ? "1 1 calc(50% - 20px)" // 500px 미만일 때
                              : "1 1 calc(33.33% - 20px)" // 그 외
                          }

                          mb="20px"
                        >
             <Flex  direction="column"  alignItems="center">
                <Center mt="10px" >
                <Image
                  src={actor.imageUrl || "https://nextstagefolder1.s3.ap-northeast-2.amazonaws.com/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg"}
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
                  src={actor.imageUrl || "https://nextstagefolder1.s3.ap-northeast-2.amazonaws.com/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg"}
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
                            <Text isTruncated> {truncateText(actor.department,6)}</Text>
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
                            <Text isTruncated>{truncateText(actor.introduction,6)}</Text>
                          )}
                        </Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
                <Flex justifyContent="space-between" alignItems="center" mt="10px">
                <Box mt={{ base: "20px", md: "60px" }}>
              {isEditing && editableActor === actor ? (
                <>
                 <input type="file" accept="image/*" onChange={handleImageUpload} />
                  {/* <Button size="sm" onClick={handleImageUpload}>이미지 업로드</Button>*/ }
                  <Button ml="20px" mr="10px" onClick={handleSave}>
                    저장
                  </Button>
                 
                </>
              ) : (
                    <>
                     
                    <Button ml="20px" mr="10px" onClick={() => handleEdit(actor)}>
                      편집
                    </Button>
                     <Button   ml="20px" mr="10px" onClick={()=>handleDelete(actor)}>삭제</Button>
                   
                     </>
                  )}

                </Box>
                </Flex>
              </Flex>
            </Box>

          ))}
        </Flex>
      </Stack>
     

    </div>
  );
};

export default Actor;