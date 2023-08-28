import { Text, Heading, Box, Divider, Stack, Image, Center } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Service = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Detects scroll position to toggle visibility of the 'Back to Top' button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > window.innerHeight * 2 / 3);
        };
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handles smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <Center h="10vh">
                <Heading size="2xl" mt="30px">우리가 Stage Play를 만들었어요 &#x1F600;</Heading>
            </Center>
            <Divider mt={8} mb={4} />
            <Center h="6vh">
                <Text>개발자를 클릭하면 개발자 깃허브 주소로 갈 수 있어요</Text>
            </Center>
            
            <Box textAlign="left">
                {/* Manager Info */}
                <DisplayInfo title="Manager" />
                <DisplayPersonInfo name="채준혁" imageSrc="https://bit.ly/dan-abramov" description="너무 재미있어요" />

                {/* Frontend Info */}
                <DisplayInfo title="Front" />
                <DisplayPersonInfo name="김준서" imageSrc="https://bit.ly/dan-abramov" github="https://github.com/wwmmIIll" description="재밌노" />
                <DisplayPersonInfo name="박지환" imageSrc="https://bit.ly/dan-abramov" description="너무 재미있어요" />
                <DisplayPersonInfo name="김민경" imageSrc="https://bit.ly/dan-abramov" description="너무 재미있어요" />

                {/* Backend Info */}
                <DisplayInfo title="Backend" />
                <DisplayPersonInfo name="전민혁" imageSrc="https://bit.ly/dan-abramov" description="너무 재미있어요" />
                <DisplayPersonInfo name="전채린" imageSrc="https://bit.ly/dan-abramov" description="너무 재미있어요" />

                {/* DB Info */}
                <DisplayInfo title="DB" />
                <DisplayPersonInfo name="채준혁" imageSrc="https://bit.ly/dan-abramov" description="너무 재미있어요" />
                <DisplayPersonInfo name="윤태성" imageSrc="https://bit.ly/dan-abramov" description="너무 재미있어요" />
                <DisplayPersonInfo name="최인서" imageSrc="https://bit.ly/dan-abramov" description="너무 재미있어요" />

                {/* Server Info */}
                <DisplayInfo title="Server" />
                <DisplayPersonInfo name="이준혁" imageSrc="https://bit.ly/dan-abramov" description="너무 재미있어요" />
            </Box>

            {/* Scroll to Top Link */}
            <Center id="top" mt="20px">
                <ScrollLink to="top" smooth={true} duration={500}>TOP</ScrollLink>
            </Center> 
            {showScrollButton && (
                <div>
                    <button id="back-to-top" onClick={scrollToTop}>
                        Back to Top
                    </button>
                </div>
            )}
        </div>
    );
};

// Component to display each developer's info
const DisplayPersonInfo = ({ name, imageSrc, github, description }) => (
    <div>
        <Image src={imageSrc} alt="사진" borderRadius="full" boxSize="150px" mt="center" />
        <Text fontSize="30px">
            {github ? <a href={github}>{name}</a> : name}
        </Text>
        <Text mt="5px" fontSize="20px">{description}</Text>
    </div>
);

// Component to display title and its corresponding divider
const DisplayInfo = ({ title }) => (
    <div>
        <Stack direction="row" h="80px">
            <Text fontSize="50px" fontWeight="bold" mr="20px">{title}</Text>
            <Divider orientation="vertical" />
            <Text fontSize="20px">(각 부서별 역할 적는 곳)</Text>
        </Stack>
    </div>
);

export default Service;
