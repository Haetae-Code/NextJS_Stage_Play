import {
    Heading,
    Box,
    Flex,
    Image,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
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
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import KakaoMap from "../components/kakaomap";
import Actor from "./addedactor";
import ImageUpload from '../components/ImageUpload';

const Page = () => {
    //const [title, setTitle] = useState("제목");
    const[selectedFile, setSelectedFile] = useState(null);
    
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
        // 이후 실제 db와 연결해서 확인
        window.alert("저장되었습니다.");
    };

    //[파일 선택 기능]
    const handleFileChange= (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    }

    //[서버 업로드용] - 백엔드 이미지 업로드 로직 구현 필요합니다. 
    const handleUpload= () => {

    }

    return (
        <Box>
            <Box>
                
                <Flex
                    
                    alignItems={"center"}
                    flexDirection={["column", "row"]}
                >
                    
                    <Stack  display="flex">
                        <Box>
                            <TableContainer>
                                <Table variant="simple" size={["sm", "md"]}>
                                    <Tbody>
                                        <Tr>
                                            <Td>공연 포스터 업로드</Td>
                                            <Td>
                                                <ImageUpload/>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>제목</Td>
                                            <Td>    
                                                <Editable
                                                defaultValue={
                                                    state.title
                                                }
                                                onChange={(value) => 
                                                    handleStateChange(
                                                        "title", 
                                                        value
                                                        )
                                                    }
                                                >                       
                                                    <EditablePreview
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="sm"
                                                    />
                                                </Editable>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>도로명 주소</Td>
                                            <Td>
                                            <Editable
                                                defaultValue={state.address}
                                                onChange={(value) =>
                                                    handleStateChange(
                                                        "address",
                                                        value
                                                    )
                                                }
                                            >
                                                <EditablePreview
                                                    border="1px solid"
                                                    p={2}
                                                    borderRadius="md"
                                                />
                                                <EditableInput
                                                    border="1px solid"
                                                    p={2}
                                                    borderRadius="md"
                                                />
                                            </Editable>
                                            </Td>
                                            
                                        </Tr>
                                        <Tr>
                                            <Td>상세 장소</Td>
                                            <Td>
                                                <Editable
                                                    defaultValue={
                                                        state.location
                                                    }
                                                    onChange={(value) =>
                                                        handleStateChange(
                                                            "location",
                                                            value
                                                        )
                                                    }
                                                >
                                                    <EditablePreview
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                    />
                                                </Editable>
                                            </Td>
                                            <Td>
                                            <Editable
                                                defaultValue={
                                                    state.InfoLocation
                                                }
                                                onChange={(value) =>
                                                    handleStateChange(
                                                        " InfoLocation",
                                                        value
                                                    )
                                                }
                                            >
                                                <EditablePreview
                                                    border="1px solid"
                                                    p={2}
                                                    borderRadius="md"
                                                />
                                                <EditableInput
                                                    border="1px solid"
                                                    p={2}
                                                    borderRadius="md"
                                                />
                                            </Editable>
                                            </Td>
                                            
                                        </Tr>
                                        <Tr>
                                            <Td>공연 일자</Td>
                                            <Td>
                                                <Editable
                                                    defaultValue={state.period}
                                                    onChange={(value) =>
                                                        handleStateChange(
                                                            "period",
                                                            value
                                                        )
                                                    }
                                                >
                                                    <EditablePreview
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                    />
                                                </Editable>
                                            </Td>
                                            
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                시작 시간
                                            </Td>
                                            
                                            
                                        </Tr>
                                        <Tr>
                                            <Td>공연 길이</Td>
                                            <Td>
                                                <Editable
                                                    defaultValue={state.time}
                                                    onChange={(value) =>
                                                        handleStateChange(
                                                            "time",
                                                            value
                                                        )
                                                    }
                                                >
                                                    <EditablePreview
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                    />
                                                </Editable>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>수용 인원</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>관람 수칙</Td>
                                        </Tr>
                                    </Tbody>
                                    
                                </Table>
                                
                            </TableContainer>
                            <Divider/>
                                                                                
                            <Text fontSize="xl">배우</Text>
                            <Text>공연에 참여하는 배우를 손쉽게 추가해요!</Text>
                            <Box>
                                <Popover>
                                <PopoverTrigger>
                                    <Button>배우 추가</Button>
                                </PopoverTrigger>
                                <PopoverContent width="1000px" maxH="xl" placement="right">
                                    <PopoverHeader >등록 배우 조회</PopoverHeader>
                                    <PopoverBody overflow="auto"><Actor/></PopoverBody>
                                </PopoverContent>
                                </Popover>
                            </Box>
                            
                            
                            <Divider/>
                                
                        </Box>
                       
                    </Stack>
                </Flex>
            </Box>

            <Box>
                <Button size="sm" onClick={handleSaveReservation}>
                    저장
                </Button>
                
            </Box>
            
        </Box>
    );
};

export default Page;