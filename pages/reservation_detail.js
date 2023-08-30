//예약상세 페이지
//import NextLink from "next/link";
import {
    Box,
    Image,
    Card,
    CardBody,
    Heading,
    Text,
    Button,
    Textarea,
    Input,
    FormControl,
    FormLabel,
    Stack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";

//import react from "react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

/*const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("test");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false;
        }
    }
};*/

const Page2 = () => {
    const [selectedTime, setSelectedTime] = useState("");
    //const [isOpen, setIsOpen] = useState(false);
    const [showStudentForm, setShowStudentForm] = useState(false);
    const [showOccupationForm, setShowOccupationForm] = useState(false);
    const [name, setName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [say_actor, setSay_Actor] = useState("");
    const [reservationStatus, setReservationStatus] = useState("");
    const router = useRouter();
    const {isOpen,onOpen,onClose}=useDisclosure();

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

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone_number: phone_number,
                    say_actor: say_actor,
                }),
            });

            if (response.ok) {
                setReservationStatus("예매가 성공적으로 완료되었습니다");
                console.log("Reservation submitted");
            } else {
                setReservationStatus("예매가 실패했습니다. 다시 시도해주세요.");
                console.error("Reservation failed");
            }
        } catch (error) {
            setReservationStatus("예매가 실패했습니다. 다시 시도해주세요.");
            console.error(error);
        }
    };

    const handleButtonClick = () => {
        onOpen();
        handleSubmit();
    };

    const [perform_Info, setperform_Info] = useState([]);

    useEffect(() => {
        fetch("/api/perform_Info")
            .then((response) => response.json())
            .then((data) => setperform_Info(data))
            .catch((error) => console.error(error));
    }, []);

    for (let i = 0; i < perform_Info.length; i++) {
        // view_day 파싱
        const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
        const matchedDay = perform_Info[i].view_day.match(dateRegex);
        perform_Info[i].view_day = matchedDay[1];

        // view_time 파싱
        const timeParts = perform_Info[i].view_time.split(":");
        const hour = parseInt(timeParts[0], 10);
        const minute = timeParts.length > 1 ? parseInt(timeParts[1], 10) : "00";
        perform_Info[i].view_time = `${hour}시 ${minute}분`;
    }

    return (
        <>
            {perform_Info.slice(0, 1).map((perform_Info) => (
                <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                >
                    <Image
                        objectFit="cover"
                        maxW={{ base: "100%", sm: "200px" }}
                        src={perform_Info.img_url}
                        alt="${perform_Info.title}"
                    />

                    <CardBody>
                        <Heading size="md">{perform_Info.title}</Heading>
                        <print>&nbsp;&nbsp;&nbsp;</print>
                        <Text py="2">
                            장 소:{perform_Info.address} {perform_Info.location}
                        </Text>
                        <Text py="2">출연진:</Text>
                        <Text py="2">기 간:{perform_Info.view_day}</Text>
                        <Text py="2">시 간:{perform_Info.view_time}</Text>
                        <Text py="2">줄거리:</Text>
                    </CardBody>
                </Card>
            ))}

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
                <Input
                    placeholder="필수기재"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <Input
                    placeholder="필수기재"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                &nbsp;
            </FormControl>

            <Text mb="8px">배우님에게: {}</Text>
            <Textarea
                isInvalid
                placeholder="필수기재"
                value={say_actor}
                onChange={(e) => setSay_Actor(e.currentTarget.value)}
            />

            <print>&nbsp;</print>
            <Stack align="center">
                <Button
                    colorScheme="blue"
                    variant="outline"
                    onClick={handleButtonClick}
                >
                    예약하기
                </Button>
            </Stack>
            <Modal size='md' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>예약자 확인</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Text>이름: {name}</Text>
                        <Text>필수 선택:</Text>
                        <Text>날짜: {selectedTime}</Text>
                        <Text>시간: </Text>
                        <Text>전화번호: {phone_number}</Text>
                        <Text>배우님에게: {say_actor}</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Text
                mb="8px"
                color={
                    reservationStatus.includes("성공") ? "green.500" : "red.500"
                }
            >
                {reservationStatus}
            </Text>
        </> //사이에 공백이
    );
};

export default Page2;
