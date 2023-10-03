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
  } from "@chakra-ui/react";
  
  //import react from "react";
  import React, { useState, useEffect } from "react";
  import { useRouter} from "next/router";
  
  /*const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("test");
  
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false;
        }
    }
  };*/
  
  const Page2 = () => {
    const router = useRouter();
    const { id } = router.query;
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    //const [isOpen, setIsOpen] = useState(false);
    const [showStudentForm, setShowStudentForm] = useState(false);
    const [showOccupationForm, setShowOccupationForm] = useState(false);
    const [name, setName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [say_actor, setSay_Actor] = useState("");
    const [userType, setUserType] = useState(""); 
    const [department, setDepartment] = useState("");
    const [studentID, setStudentID] = useState("");
    const [occupation, setOccupation] = useState("");
    const [reservationStatus, setReservationStatus] = useState("");

    /*
    const handleStudentCheckboxChange = () => {
        setShowStudentForm(!showStudentForm); 
    };
    
    const handleOutsiderCheckboxChange = () => {
        setShowOccupationForm(!showOccupationForm);
    };
    */
    const [perform_Info, setperform_Info] = useState([]);
    useEffect(() => {
        fetch(`/api/perform_Info/${id}`)
        .then((response) => response.json())
        .then((data) => setperform_Info(data))
        .catch((error) => console.error(error));
    }, [id]);

    const [Performance, setPerformance] = useState([]);
    useEffect(() => {
        fetch(`/api/Performance/${id}`)
            .then((response) => response.json())
            .then((data) => setPerformance(data))
            .catch((error) => console.error(error));
    }, [id]);

    const [actors, setActors] = useState([]);
    useEffect(() => {
        fetch(`/api/actors/${id}`)
            .then((response) => response.json())
            .then((data) => setActors(data))
            .catch((error) => console.error(error));
    }, [id]);

    const handleTimeChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const saveTime = (event) => {
        setSelectedDate(event.target.value);
        console.log(selectedTime);
    };

    const timeOptions = perform_Info
    .filter((perform) => perform.view_date === selectedDate)
    .map((perform) => perform.view_time);

    for (let i = 0; i < perform_Info.length; i++) {
        const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
        const matchedDay = perform_Info[i].view_date.match(dateRegex);
        perform_Info[i].view_date = matchedDay[1];

        const timeParts = perform_Info[i].view_time.split(':');
        const hour = parseInt(timeParts[0], 10);
        const minute = timeParts.length > 1 ? parseInt(timeParts[1], 10) : "00";
        perform_Info[i].view_time = `${hour}시 ${minute}분`;
      }      

    const handleStudentButton = () => {
        setUserType("student");
        setShowStudentForm(true);
        setShowOccupationForm(false);
    };
  
    const handleOutsiderButton = () => {
        setUserType("outsider");
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
                performance_key: id,
                name,
                phone_number: phone_number,
                say_actor: say_actor,
                userType,
                department: department,
                studentID: studentID,
                identity: occupation,
                selectedDate: selectedDate,
                selectedTime: selectedTime,
            }),
          });
    
          if (response.ok) {
            setReservationStatus("예매를 성공적으로 완료되었습니다");
            console.log("Reservation submitted");
          } else {
            setReservationStatus("예매를 실패했습니다. 다시 시도해주세요.");
            console.error("Reservation failed");
          }
        } catch (error) {
            setReservationStatus("예매를 실패했습니다. 다시 시도해주세요.");  
          console.error(error);
        }
      };
  
    return (
        <>
            {Performance.map((PerformanceItem) => (
            <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
            >
                <Image
                    objectFit="cover"
                    maxW={{ base: "100%" }}
                    src={PerformanceItem.img_url}
                    alt=""
                />
  
                <CardBody>
                    <Heading size="md">{PerformanceItem.title}</Heading>
                    <print>&nbsp;&nbsp;&nbsp;</print>
                    <Text py="2">장 소: {PerformanceItem.address} {PerformanceItem.location}</Text>
                    <Text py="2">출연진:</Text>
                        <Stack spacing={2}>
                            {actors.map((actor) => (
                                <Text key={actor.id} py="1">
                                    {actor.name} 
                                </Text>
                            ))}
                        </Stack>
                    <Text py="2">기 간:</Text>
                        <Stack spacing={2}>
                            {perform_Info.map((infoItem) => (
                                <Text py="1">
                                    {infoItem.view_date}  {infoItem.view_time}
                                </Text>
                            ))}
                        </Stack>
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
                    {Performance.map((Performance) => (
                    <AccordionPanel pb={4}>
                        {Performance.rules}
                    </AccordionPanel>
                    ))}
                </AccordionItem>
            </Accordion>
            <print>&nbsp;</print>
  
            <FormControl isRequired>
                <FormLabel>이름</FormLabel>
                <Input placeholder="필수기재" value={name} onChange={(e) => setName(e.target.value)} />
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
                    onClick={handleOutsiderButton}
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
                        <Input placeholder="필수기재" value={department} onChange={(e) => setDepartment(e.target.value)} />
                    </FormControl>
                    <print>&nbsp;</print>
                    <FormControl isRequired>
                        <FormLabel>학번</FormLabel>
                        <Input placeholder="필수기재" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
                    </FormControl>
                </>
            )}
            <print>&nbsp;</print>
            {showOccupationForm && (
                <FormControl isRequired>
                    <FormLabel>직업확인</FormLabel>
                    <Input placeholder="예: 교수, 의사" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                </FormControl>
            )}
            <print>&nbsp;</print>
            <FormControl isRequired>
                <FormLabel>날짜 선택</FormLabel>
                <Input
                    size="md"
                    type="date"
                    min="2023-08-01"
                    max="2023-09-31"
                    onChange={handleTimeChange}
                    value={selectedDate}
                />
                <print>&nbsp;</print>
            </FormControl>
  
            <FormControl isRequired>
                <FormLabel>시간 선택</FormLabel>
  
                <select value={selectedTime}>
                    {timeOptions.map((time) => (
                        <option key={time} value={time} onChange={(e) => setSelectedTime(e.target.value)}>
                            {time}
                        </option>
                    ))}
                </select>
  
                <print>&nbsp;</print>
            </FormControl>
  
            <print>&nbsp;</print>
            <FormControl isRequired>
                <FormLabel>전화번호</FormLabel>
                <Input placeholder="필수기재" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}/>
                &nbsp;
            </FormControl>
  
            <Text mb="8px">배우님에게: {}</Text>
            <Textarea isInvalid placeholder="필수기재" value={say_actor} onChange={(e) => setSay_Actor(e.currentTarget.value)}/>
  
            <print>&nbsp;</print>
            <Stack align="center">
                <Button colorScheme="blue" variant="outline" onClick={handleSubmit}>
                    예약하기
                </Button>
            </Stack>
  
            <Text mb="8px" color={reservationStatus.includes("성공") ? "green.500" : "red.500"}>
                {reservationStatus}
            </Text>
        </> //사이에 공백이
    );
  };
  
  export default Page2;