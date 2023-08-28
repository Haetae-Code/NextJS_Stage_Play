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
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Page2 = () => {
    const [selectedTime, setSelectedTime] = useState("");
    const [showStudentForm, setShowStudentForm] = useState(false);
    const [showOccupationForm, setShowOccupationForm] = useState(false);
    const [name, setName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [say_actor, setSay_Actor] = useState("");
    const [reservationStatus, setReservationStatus] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [perform_Info, setperform_Info] = useState([]);

    // This function handles the date change and sets the available time options
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    // Available time options based on selected date
    const timeOptions =
        selectedTime === "2023-03-29"
            ? ["13:00", "17:00"]
            : selectedTime === "2023-03-30"
                ? ["13:00"]
                : [];

    // Functions to toggle forms based on selection
    const handleStudentButton = () => {
        setShowStudentForm(true);
        setShowOccupationForm(false);
    };

    const handleExternalButton = () => {
        setShowStudentForm(false);
        setShowOccupationForm(true);
    };

    // This function submits the reservation form data
    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone_number,
                    say_actor,
                }),
            });

            response.ok
                ? setReservationStatus("예매가 성공적으로 완료되었습니다")
                : setReservationStatus("예매가 실패했습니다. 다시 시도해주세요.");
        } catch (error) {
            setReservationStatus("예매가 실패했습니다. 다시 시도해주세요.");
        }
    };

    // Fetch performance data when component is mounted
    useEffect(() => {
        fetch("/api/perform_Info")
            .then((response) => response.json())
            .then((data) => setperform_Info(data));
    }, []);

    for (let i = 0; i < perform_Info.length; i++) {
        const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
        const matchedDay = perform_Info[i].view_day.match(dateRegex);
        perform_Info[i].view_day = matchedDay[1];

        const timeParts = perform_Info[i].view_time.split(":");
        perform_Info[i].view_time = `${parseInt(timeParts[0], 10)}시 ${timeParts[1]}분`;
    }

    return (
        <>
            {perform_Info.slice(0, 1).map((info) => (
                <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
                    <Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src={info.img_url} alt={info.title} />
                    <CardBody>
                        <Heading size="md">{info.title}</Heading>
                        <Text py="2">장 소: {info.address} {info.location}</Text>
                        <Text py="2">출연진:</Text>
                        <Text py="2">기 간: {info.view_day}</Text>
                        <Text py="2">시 간: {info.view_time}</Text>
                        <Text py="2">줄거리:</Text>
                    </CardBody>
                </Card>
            ))}

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            관람 시 주의사항
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>관람 시 주의해야 할 사항들을 적는 공간입니다.</AccordionPanel>
                </AccordionItem>
            </Accordion>

            {/* The forms for user input start here */}
            <Form>
                {/* Add all your form controls here as shown in the example */}
            </Form>

            <Stack align="center">
                <Button colorScheme="blue" variant="outline" onClick={onOpen}>
                    예약하기
                </Button>
            </Stack>
            <Modal size='md' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>예약자 확인</ModalHeader>
                    <ModalCloseButton />
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
            <Text mb="8px" color={reservationStatus.includes("성공") ? "green.500" : "red.500"}>
                {reservationStatus}
            </Text>
        </>
    );
};

export default Page2;
