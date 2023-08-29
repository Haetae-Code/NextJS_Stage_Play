import {
    Box,
    Flex,
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Text,
    Button,
    Stack,
    Editable,
    EditablePreview,
    EditableInput,
    Divider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ImageUpload from '../components/ImageUpload';
import Actor from "./addedactor";

const Page = () => {
    // State for keeping track of event details
    const [state, setState] = useState({
        title: "제목",
        location: "101호 대강당",
        period: "2023/03/17~2023/03/20",
        time: "171분",
        price: "A석-5000원 B석-3000원",
        InfoLocation: "홍주문화회관",
        address: "충남 홍성군 홍성읍 내포로 164",
    });

    // Handler to manage state changes for event details
    const handleStateChange = (field, value) => {
        setState(prevState => ({ ...prevState, [field]: value }));
    };

    // Handler for saving the event reservation
    const handleSaveReservation = () => {
        window.alert("저장되었습니다.");
    };

    return (
        <Box>
            <Flex alignItems={"center"} flexDirection={["column", "row"]}>
                <Stack display="flex">
                    <TableContainer>
                        <Table variant="simple" size={["sm", "md"]}>
                            <Tbody>
                                <Tr>
                                    <Td>공연 포스터 업로드</Td>
                                    <Td><ImageUpload /></Td>
                                </Tr>
                                <Tr>
                                    <Td>제목</Td>
                                    <Td>
                                        <Editable
                                            defaultValue={state.title}
                                            onChange={value => handleStateChange("title", value)}
                                        >
                                            <EditablePreview border="1px solid" p={2} borderRadius="md" />
                                            <EditableInput border="1px solid" p={2} borderRadius="sm" />
                                        </Editable>
                                    </Td>
                                </Tr>
                                // ... (Similar patterns for other table rows have been omitted for brevity)
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Divider />
                    <Text fontSize="xl">배우</Text>
                    <Text>공연에 참여하는 배우를 손쉽게 추가해요!</Text>
                    <Box>
                        <Popover>
                            <PopoverTrigger>
                                <Button>배우 추가</Button>
                            </PopoverTrigger>
                            <PopoverContent width="1000px" maxH="xl" placement="right">
                                <PopoverHeader>등록 배우 조회</PopoverHeader>
                                <PopoverBody overflow="auto"><Actor /></PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Box>
                    <Divider />
                </Stack>
            </Flex>
            <Box>
                <Button size="sm" onClick={handleSaveReservation}>
                    저장
                </Button>
            </Box>
        </Box>
    );
};

export default Page;
 