import {
    Heading,
    Box,
    Flex,
    Image,
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Text,
    Button,
    Stack,
    Link,
    Editable,
    EditablePreview,
    EditableInput,
    Divider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import KakaoMap from "../components/kakaomap";
import Actor from "./addedactor";

const Page = () => {
    const [input, setInput] = useState('');
    const [state, setState] = useState({
        title: "제목",
        location: "101호 대강당",
        period: "2023/03/17~2023/03/20",
        time: "171분",
        price: "A석-5000원 B석-3000원",
        InfoLocation: "홍주문화회관",
        address: "충남 홍성군 홍성읍 내포로 164",
    });

    const handleStateChange = (field, value) => {
        setState((prevState) => ({ ...prevState, [field]: value }));
    };

    const handleSaveReservation = () => {
        window.alert("저장되었습니다.");
    };

    return (
        <Box>
            <Flex alignItems={"center"} flexDirection={["column", "row"]}>
                <Stack display="flex">
                    <Box>
                        <TableContainer>
                            <Table variant="simple" size={["sm", "md"]}>
                                <Tbody>
                                    {/* Table for inputting and editing various details */}
                                    {Object.keys(state).map((key, index) => (
                                        <Tr key={index}>
                                            <Td>{key}</Td>
                                            <Td>
                                                <Editable
                                                    defaultValue={state[key]}
                                                    onChange={(value) => handleStateChange(key, value)}
                                                >
                                                    <EditablePreview border="1px solid" p={2} borderRadius="md" />
                                                    <EditableInput border="1px solid" p={2} borderRadius="md" />
                                                </Editable>
                                            </Td>
                                        </Tr>
                                    ))}
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
                    </Box>
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
