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
  Input
} from "@chakra-ui/react";

const addedactor = () => {
    const [actors, setActors] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editableActor, setEditableActor] = useState({
      name: "",
      department: "",
      introduction: "",
      imageUrl: "",
    });
    const [isEditing, setIsEditing] = useState(false);

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
  
    const handleDelete = (actor) => {
      const updatedActors = actors.filter((a) => a !== actor);
      setActors(updatedActors);
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

    const handleCancelEdit = () => {
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
      
      <Box mt="40px" >
        

       
        <Stack ml="50px">
        <Flex flexWrap="wrap" gap="20px" maxHeight="1000px" overflowY="auto">
          {actors.map((actor, index) => (
            <Box key={index} py={10} flex="1 1 45%" mt="-35px">
              <Flex>
                <Image
                  src={actor.imageUrl || "https://nextstagefolder1.s3.ap-northeast-2.amazonaws.com/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg"}
                  alt="No image"
                  borderRadius="full"
                  boxSize="100px"
                  mt="center"
                />
                <TableContainer ml="30px">
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
                            <Text isTruncated> {truncateText(actor.department, 4)}</Text>
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
                            <Text isTruncated>{truncateText(actor.introduction, 4)}</Text>
                          )}
                        </Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
                <Box>
                  <Button>선택</Button>
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

export default addedactor;