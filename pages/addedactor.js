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

const AddedActor = () => {
  // State for storing actor data, editable actor data, visibility of form, and edit status
  const [actors, setActors] = useState([]);
  const [editableActor, setEditableActor] = useState({
    name: "",
    department: "",
    introduction: "",
    imageUrl: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch actors on component mount
  useEffect(() => {
    fetch("/api/actors")
      .then((response) => response.json())
      .then((data) => setActors(data))
      .catch((error) => console.error(error));
  }, []);

  // Handle changes to the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableActor((prevActor) => ({ ...prevActor, [name]: value }));
  };

  // Add new actor
  const handleAddActor = () => {
    if (!editableActor.name || !editableActor.department || !editableActor.introduction) {
      console.error("필수 항목을 입력하세요.");
      return;
    }
    setActors((prevActors) => [...prevActors, editableActor]);
    resetEditableActor();
  };

  // Delete an actor
  const handleDelete = (actor) => {
    const updatedActors = actors.filter((a) => a !== actor);
    setActors(updatedActors);
  };

  // Set the actor data to be edited
  const handleEdit = (actor) => {
    setEditableActor(actor);
    setIsEditing(true);
  };

  // Save the edited actor data
  const handleSave = () => {
    setActors((prevActors) =>
      prevActors.map((actor) =>
        actor === editableActor ? { ...editableActor } : actor
      )
    );
    resetEditableActor();
  };

  // Cancel the editing process
  const handleCancelEdit = () => {
    resetEditableActor();
  };

  // Reset editable actor state
  const resetEditableActor = () => {
    setEditableActor({
      name: "",
      department: "",
      introduction: "",
      imageUrl: "",
    });
  };

  // Truncate text if it's too long
  const truncateText = (text, maxLength) => {
    return text.length <= maxLength ? text : `${text.substring(0, maxLength)}...`;
  };

  return (
    <div>
      <Box mt="40px">
        <Stack ml="50px">
          <Flex flexWrap="wrap" gap="20px" maxHeight="1000px" overflowY="auto">
            {actors.map((actor, index) => (
              <Box key={index} py={10} flex="1 1 45%" mt="-35px">
                <Flex>
                  <Image
                    src={actor.imageUrl || "https://bit.ly/dan-abramov"}
                    alt="No image"
                    borderRadius="full"
                    boxSize="100px"
                  />
                  <TableContainer ml="30px">
                    <Table variant="simple">
                      <Tfoot>
                        {/* Rendering data for each actor and handling editing mode */}
                        {/* ... Rest of the actor details code ... */}
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

export default AddedActor;
