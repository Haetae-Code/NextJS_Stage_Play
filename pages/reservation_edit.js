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
import React, { useState, useEffect } from "react";
{/*import KakaoMap from "../components/kakaomap";*/}
import Actor from "./addedactor";
import { useRouter } from 'next/router';
//import { add } from "date-fns.js";
import * as dataCheck from "./api/Utils/datacheck.js";



const Page = () => {
    const router = useRouter();
    const { performance_key } = router.query;
    const [input, setInput] = useState('')
    const [state, setState] = useState({
        title: "",
        location: "",
        period: "",
        time: "",
        runtime: "", //숫자만 작성
        price: "",
        address: "",
        capacity: "",
        rules: "",
    });
    

    const [Performance, setPerformance] = useState([]);
    const [Times, setTimes] = useState([]);
    
    useEffect(() => {
        if (Performance && Performance[0]) {
            setState((prevState) => ({
                ...prevState,
                title: Performance[0].title || "",
                location: Performance[0].location || "",
                period: Performance[0].period || "",
                time: Performance[0].time || "",
                runtime: Performance[0].run_time || "",
                // 나머지 필드도 필요에 따라 추가하세요
            }));
        }
    }, [Performance]);

    useEffect(() => {
      if (performance_key) {
        fetch(`/api/Performance/${performance_key}`)
          .then((response) => response.json())
          .then((data) => setPerformance(data))
          .catch((error) => console.error(error));
          console.log(Performance);
          /*addPerformance(Performance);*/
      }
    }, [performance_key]);
    const addPerformance = (newPerformance) => {
        setPerformance(prevPerformance => [...prevPerformance, newPerformance]);
      };
    
    useEffect(() => {
      if (performance_key) {
        fetch(`/api/Times/${performance_key}`)
          .then((response) => response.json())
          .then((data) => setTimes(data))
          .catch((error) => console.error(error));
      }
    }, [performance_key]);
    const addTimes = (newTimes) => {
        const DatesArray = Times.map((timesItem) => timesItem.view_date);
        const DatesConcatenated = timesArray.join(', ');
        const timesArray = Times.map((timesItem) => timesItem.view_time);
        const timesConcatenated = timesArray.join(', ');
        setTimes(prevTimes => [...prevPerformance, newPerformance]);
    };

    {/*const handletitleInputChange = (e) => setInput(e.target.value)
    const handleInputChange =(e) => setInput(e.target.value)
const isError = input === ''*/}
    const handleStateChange = (field, value) => {
        setState((prevState) => ({ ...prevState, [field]: value }));
    };

    // 데이터 형식 체크
    const handleSaveReservation = async () => {
        // 여기서부터
    if (!dataCheck.isValidRunTimeFormat(state.time)) {
        console.error("run_time은 숫자만 입력해야 합니다.");
        return;
    }

    if (!dataCheck.isValidCapacityFormat(state.capacity)) {
        console.error("capacity은 숫자만 입력해야 합니다.");
        return;
    }

    if (!dataCheck.isValidPeriodFormat(state.period)) {
        console.error("period는 YYYY-MM-DD 형식이어야 합니다.");
        return;
    }
    //여기까지 함수로 만들기
        try {
            const response = await fetch("/api/ReservationEdit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    performance_key,
                    title,
                    location,
                    period,
                    time,
                    price,
                    address,
                    runtime,
                    capacity,
                    rules,
                }),
              });
        
              if (response.ok) {
                setInput("공연 편집 성공");
                console.log("Reservation edit submitted");
              } else {
                setInput("공연 편집 실패. 다시 시도해주세요.");
                console.error("Reservation edit failed");
              }
            } catch (error) {
                setInput("공연 편집 실패. 다시 시도해주세요.");
                console.error(error);
            }
        };
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
                                                        fontSize={["md", "lg"]}
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="sm"
                                                        fontSize={["md", "lg"]}
                                                    />
                                                </Editable>
                                                {Performance && Performance[0] && Performance[0].title}
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
                                                    fontSize={["md", "lg"]}
                                                />
                                                <EditableInput
                                                    border="1px solid"
                                                    p={2}
                                                    borderRadius="md"
                                                    fontSize={["md", "lg"]}
                                                />
                                            </Editable>
                                            {Performance && Performance[0] && Performance[0].address}
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
                                                        fontSize={["md", "lg"]}
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                        fontSize={["md", "lg"]}
                                                    />
                                                </Editable>
                                                {Performance && Performance[0] && Performance[0].location}
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
                                                        fontSize={["md", "lg"]}
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                        fontSize={["md", "lg"]}
                                                    />
                                                </Editable>
                                                {Performance && Performance[0] && Performance[0].period}
                                            </Td>
                                            
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                시작 시간
                                            </Td>
                                            <Td>    
                                                <Editable
                                                defaultValue={
                                                    state.time
                                                }
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
                                                        fontSize={["md", "lg"]}
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="sm"
                                                        fontSize={["md", "lg"]}
                                                    />
                                                </Editable>
                                                {Performance && Performance[0] && Performance[0].time}
                                            </Td>
                                            
                                        </Tr>
                                        <Tr>
                                            <Td>공연 길이</Td>
                                            <Td>
                                                <Editable
                                                    defaultValue={state.time}
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
                                                        fontSize={["md", "lg"]}
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="md"
                                                        fontSize={["md", "lg"]}
                                                    />
                                                </Editable>
                                                {Performance && Performance[0] && Performance[0].run_time}
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>수용 인원</Td>
                                            <Td>    
                                                <Editable
                                                defaultValue={
                                                    state.capacity
                                                }
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
                                                        fontSize={["md", "lg"]}
                                                    />
                                                    <EditableInput
                                                        border="1px solid"
                                                        p={2}
                                                        borderRadius="sm"
                                                        fontSize={["md", "lg"]}
                                                    />
                                                </Editable>
                                                {Performance && Performance[0] && Performance[0].capacity}
                                            </Td>
                                        </Tr>
                                        <Tr>
    <Td>관람 수칙</Td>
    <Td>
        <Editable
            defaultValue={state.rules}
            onChange={(value) =>
                handleStateChange("rules", value)
            }
        >
            <EditablePreview
                border="1px solid"
                p={2}
                borderRadius="md"
                fontSize={["md", "lg"]}
            />
            <EditableInput
                border="1px solid"
                p={2}
                borderRadius="sm"
                fontSize={["md", "lg"]}
            />
        </Editable>
        {Performance && Performance[0] && (
            <Text whiteSpace="pre-wrap">
                {Performance[0].rules.split("※").map((rule, index, array) => (
                    <React.Fragment key={index}>
                        {rule.trim()}
                        {index < array.length - 1 && <br />} {/* 마지막 줄은 <br /> 추가하지 않음 */}
                        {index < array.length - 1 && "※"} {/* ※ 추가, 마지막 줄은 추가하지 않음 */}
                    </React.Fragment>
                ))}
            </Text>
        )}
    </Td>
</Tr>
                                    </Tbody>
                                    
                                </Table>
                                
                            </TableContainer>
                            <Divider/>
                                                                                
                            <Text fontSize={["xl", "2xl"]}>배우</Text>
                            <Text>공연에 참여하는 배우를 손쉽게 추가해요!</Text>
                            <Box>
                                <Popover>
                                <PopoverTrigger>
                                    <Button>배우 추가</Button>
                                </PopoverTrigger>
                                <PopoverContent width={["100%", "500px"]} maxH={["100vh", "xl"]} placement="right">
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
                <Button size="sm" onClick={handleSaveReservation}>
                    저장
                </Button>
            </Box>
        </Box>
    );
};

export default Page;
