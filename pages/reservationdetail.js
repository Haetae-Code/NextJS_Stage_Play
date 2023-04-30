//예약상세 페이지
import NextLink from "next/link";
import {
    Box,
    Image,
    Container,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Button,
    Textarea,
    Input,
    FormControl,
    FormLabel,
    HStack,
    colorScheme,
    ButtonGroup,
    Stack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox,
    datalist,
    option,
    Select,
} from "@chakra-ui/react";

import react from "react";
import React, { useState } from "react";

const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("test");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false;
        }
    }
};

const Page2 = () => {
    const [selectedTime, setSelectedTime] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [showStudentForm, setShowStudentForm] = useState(false);
    const [showOccupationForm, setShowOccupationForm] = useState(false);
    const handlTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const timeOptions =
        selectedTime === "2023-03-29"
            ? ["13:00", "17:00"]
            : selectedTime === "2023-03-30"
            ? ["13:00"]
            : [];

            const handleStudentButton = () => {
                setShowStudentForm(true);
                setShowOccupationForm(false);
            };
        
            const handleExternalButton = () => {
                setShowStudentForm(false);
                setShowOccupationForm(true);
            };
            
    return (
        <>
            <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
            >
                <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="http://placekitten.com/201/300"
                    alt="캣츠"
                />

                <CardBody>
                    <Heading size="md">캣츠</Heading>
                    <print>&nbsp;&nbsp;&nbsp;</print>
                    <Text py="2">장 소:</Text>
                    <Text py="2">출연진:</Text>
                    <Text py="2">기 간:</Text>
                    <Text py="2">시 간:</Text>
                    <Text py="2">줄거리:</Text>
                </CardBody>
            </Card>
            <print>&nbsp;</print>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                                관람 시 주의사항
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        관람 시 주의해야 할 사항들을 적는 공간입니다.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <print>&nbsp;</print>

            <FormControl isRequired>
                <FormLabel>이름</FormLabel>
                <Input placeholder="필수기재" />
                <print>&nbsp;</print>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>필수선택</FormLabel>
            </FormControl>

            <Stack spacing={5} direction="row">
                <input
                    type="checkbox"
                    name="test"
                    id="test1"
                    value="1"
                    onClick={handleStudentButton}
                    checked={showStudentForm}
                />
                <Text>재학생</Text>
                <br />
                <input
                    type="checkbox"
                    name="test"
                    id="test2"
                    value="2"
                    onClick={handleExternalButton}
                    checked={showOccupationForm}
                />
                <Text>외부인</Text>
                <br />
            </Stack>
            <print>&nbsp;</print>
            {showStudentForm && (
                <>
                    <FormControl isRequired>
                        <FormLabel>학과</FormLabel>
                        <Input placeholder="필수기재" />
                    </FormControl>
                    <print>&nbsp;</print>
                    <FormControl isRequired>
                        <FormLabel>학번</FormLabel>
                        <Input placeholder="필수기재" />
                    </FormControl>
                </>
            )}
             <print>&nbsp;</print>
            {showOccupationForm && (
                <FormControl isRequired>
                    <FormLabel>직업확인</FormLabel>
                    <Input placeholder="예: 교수, 의사" />
                </FormControl>
            )}
            <print>&nbsp;</print>
            <FormControl isRequired>
                <FormLabel>날짜 선택</FormLabel>
                <Input
                    size="md"
                    type="date"
                    min="2023-03-29"
                    max="2023-03-30"
                    onChange={handlTimeChange}
                    value={selectedTime}
                />
                <print>&nbsp;</print>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>시간 선택</FormLabel>

                <select>
                    {timeOptions.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>

                <print>&nbsp;</print>
            </FormControl>

            <print>&nbsp;</print>
            <FormControl isRequired>
                <FormLabel>전화번호</FormLabel>
                <Input placeholder="필수기재" />
                &nbsp;
            </FormControl>

            <Text mb="8px">배우님에게: {}</Text>
            <Textarea isInvalid placeholder="필수기재" />

            <print>&nbsp;</print>
            <Stack align="center">
                <Button colorScheme="blue" variant="outline">
                    예약하기
                </Button>
            </Stack>
        </> //사이에 공백이
    );
};

export default Page2;
