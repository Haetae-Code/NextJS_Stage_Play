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
{/*import KakaoMap from "../components/kakaomap";*/}
import Actor from "./addedactor";
import ImageUpload from '../components/ImageUpload';

const Page = () => {
    //const [title, setTitle] = useState("제목");
    const[selectedFile, setSelectedFile] = useState(null);
    const [reservationStatus, setReservationStatus] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [state, setState] = useState({
        title: "제목",
        location: "홍주문화회관 101호 대강당",
        period: "2023-03-17, 2023-03-20",
        time: "13:00:00, 17:00:00",
        runtime: "171", //숫자만 작성
        price: "A석-5000원 B석-3000원",
        address: "충남 홍성군 홍성읍 내포로 164",
        capacity: "40",
        rules: "규칙규칙",
    });

    const handleStateChange = (field, value) => {
        setState((prevState) => ({ ...prevState, [field]: value }));
    };

    const handleTimeChange = (event) => {
        setSelectedDate(event.target.value);
        setSelectedTime("");
    }

    // 데이터 형식 체크
    const handleSubmit = async () => {
        const isValidDateFormat = (dates) => {
            const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
            return dates.match(regex) !== null;
        };
        
        const isValidPeriodFormat = (period) => {
            const dates = period.split(", ");
            return dates.length >= 1 && dates.every(isValidDateFormat);
        };

        const isValidRunTimeFormat = (runTime) => {
            const regex = /^\d+$/;
            return runTime.match(regex) !== null;
        };
        
        const isValidCapacityFormat = (capacity) => {
            const regex = /^\d+$/;
            return capacity.match(regex) !== null;
        };

        if (!isValidRunTimeFormat(state.runtime)) {
            console.error("run_time은 숫자만 입력해야 합니다.");
            return;
        } 

        if (!isValidCapacityFormat(state.capacity)) {
            console.error("capacity은 숫자만 입력해야 합니다.");
            return;
        } 

        if (!isValidPeriodFormat(state.period)) {
            console.error("period는 YYYY-MM-DD 형식이어야 합니다.");
            return;
    }

    try {
        const response = await fetch("/api/ReservationEdit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                location,
                period,
                time,
                price,
                InfoLocation,
                address,
                runtime,
                capacity,
                rules,
            }),
          });
    
          if (response.ok) {
            setReservationStatus("공연 추가 성공");
            console.log("Reservation submitted");
          } else {
            setReservationStatus("공연 추가 실패. 다시 시도해주세요.");
            console.error("Reservation failed");
          }
        } catch (error) {
            setReservationStatus("공연 추가 실패. 다시 시도해주세요.");  
          console.error(error);
        }
    };

    //[파일 선택 기능]
    const handleFileChange= (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    }

    //[서버 업로드용] - 백엔드 이미지 업로드 로직 구현 필요합니다. 
    {/*const handleUpload= () => {

    }

    const handleDataCheck=()=>{

    }
    */}
    return (
        <Box>
            <Box>
                
                <Flex
                    
                    alignItems={"center"}
                    flexDirection={["column", "row"]}
                    textAlign="center"
                    justifyContent="center"
                >
                    
                    <Stack  display="flex" width={["100%", "80%"]} padding={[4, 8]}>
                        <Box alignItems="center" justifyContent="center">
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
                                                        size="md"
                                                        type="datetime-local"
                                                        onChange={handleTimeChange}
                                                        value={selectedDate}
                                                    />
                                                </Editable>
                                            </Td>
                                            
                                        </Tr>
                                        {/*<Tr>
                                            <Td>
                                                시작 시간
                                            </Td>
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
                                                        type="time"
                                                    />
                                                </Editable>
                                            </Td>
                                            
                                            
                                                </Tr>*/}
                                        <Tr>
                                            <Td>공연 길이</Td>
                                            <Td>
                                            <Editable
                                                defaultValue={state.runtime}
                                                onChange={(value) =>
                                                    handleStateChange(
                                                        "runtime",
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
                                            <Td>
                                            <Editable
                                                defaultValue={state.capacity}
                                                onChange={(value) =>
                                                    handleStateChange(
                                                        "capacity",
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
                                            <Td>관람 수칙</Td>
                                            <Td>
                                            <Editable
                                                defaultValue={state.rules}
                                                onChange={(value) =>
                                                    handleStateChange(
                                                        "rules",
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
                                    </Tbody>
                                    
                                </Table>
                                
                            </TableContainer>
                            <Divider/>
                                                                                
                            <Text fontSize="xl" mt={2}>배우</Text>
                            <Text>공연에 참여하는 배우를 손쉽게 추가해요!</Text>
                            <Box>
                                <Popover>
                                <PopoverTrigger>
                                    <Button mb={2}>배우 추가</Button>
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

            <Box textAlign="center">
                <Button size="sm" onClick={handleSubmit}>
                    저장
                </Button>
                
            </Box>
            
        </Box>
    );
};

export default Page;