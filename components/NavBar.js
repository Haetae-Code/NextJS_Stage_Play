//?��비바 컴포?��?��
import React, { forwardRef, Fragment, useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import {
    chakra,
    Container,
    Box,
    Link,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Input,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Button,
    Text,
    useDisclosure,
    VStack,
    Divider,
    Icon,
    useMediaQuery,
    List,
    ListItem,
    Stack,
    Center
} from "@chakra-ui/react";

import { HamburgerIcon, CalendarIcon } from "@chakra-ui/icons";
// import { IoLogoGithub } from 'react-icons/io5'

import ColorMode from "./ColorModeButton";
import SearchBar from "./SearchBar";

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? "grassTeal" : undefined}
            color={active ? "#202023" : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    );
};

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
));

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    > svg {
        transition: 200ms ease;
    }

    &:hover > svg {
        transform: rotate(20deg);
    }
`;

const CwuLogoImage = chakra(Image, {
    shouldForwardProp: (prop) =>
        ["width", "height", "src", "alt"].includes(prop),
});

const Navbar = (props) => {
    const [isMobile] = useMediaQuery("(max-width: 955px)");

    const [isHovered, setIsHovered] = useState(false);
    


    useEffect(() => {
        console.log("isHovered value changed:", isHovered);
    }, [isHovered]);

    function handleMouseEnter() {
        console.log("handleMouseEnter called");
        setIsHovered(true);
    }

    function handleMouseLeave() {
        console.log("handleMouseLeave called");
        setIsHovered(false);
    }
    

    const { path } = props;

      //�??���? ?��?��?�� ?��?��.

      const [showSuggestions, setShowSuggestions] = useState(false);
      const [suggestions, setSuggestions] = useState([
        "추천�??��?��1",
        "추천�??��?��2",
        "추천�??��?��3",
        "추천�??��?��4",
        "?��번주 ?��?��?��",
      ]);
      const popularSuggestions = ["?���? �??��?�� 1", "?���? �??��?�� 2", "?���? �??��?�� 3"];
    
      const handleSearchClick = () => {
        setShowSuggestions(!showSuggestions);
        //?��?�� �??��?�� 로직 처리?��?��?��
      };

      const showMovieSuggestions = suggestions.includes("?��번주 ?��?��?��");

    return (
        <Fragment>
            <VStack>
                <Box
                    position="flex"
                    as="nav"
                    w="100%"
                    bg={useColorModeValue("#ffffff40", "#20202380")}
                    css={{ backdropFilter: "blur(5px)" }}
                    zIndex={2}
                    {...props}
                >
                    <Container
                        display="flex"
                        p={3}
                        maxW="container.xl"
                        wrap="wrap"
                        align="center"
                        justify="space-between"
                    >
                        {/*로고 ?��?���?*/}
                        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                          <Link href="/" scroll={false}>
                            <LogoBox>
                              <CwuLogoImage
                                src="/asset/image/cwulogo.png"
                                alt="cwulogo"
                                borderRadius="10"
                                width="100"
                                height="100"
                                pt={"5"}
                              />
                              <Text
                                  color={useColorModeValue("gray.800", "whiteAlpha.900")}
                                  //   fontFamily='M PLUS Rounded 1c", sans-serif'
                                  fontWeight="bold"
                                  ml={3}
                              >
                              Stage Play
                              </Text>
                            </LogoBox>
                          </Link>
                        </Heading>

                        <Container>

                            <Flex align="center" mr={5}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                            <Box position="relative" width="500px">
                                {/*�??���?*/}
                                <Input
                                    borderWidth={"2px"}
                                    borderRadius="100"
                                    borderColor={"#2d6fbb"}
                                    variant="outline"
                                    placeholder="Search"
                                    //htmlSize={20} width='auto'
                                    width="500px"
                                    onClick={handleSearchClick}
                                  />
 {showSuggestions && (
  <Box
    position="absolute"
    top="100%"
    left={0}
    width="100%"
    backgroundColor="#333"
    color="white"
    border="1px solid #ccc"
    borderRadius="4px"
    boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
    zIndex={1}
    style={{
      marginTop: "4px",
      transform: "translateY(0)",
      opacity: 1,
      visibility: "visible",
    }}
    transition="transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease"
  >
    <Box padding="8px 12px" borderBottom="1px solid white">
      <Text color="white" fontWeight="bold">
        최근 �??��?��
      </Text>
    </Box>
    {suggestions.map((suggestion, index) => (
      <Box
        key={index}
        padding="8px 12px"
        cursor="pointer"
        transition="background-color 0.3s ease"
        _hover={{ backgroundColor: "#444" }}
        onClick={() => handleSuggestionClick(suggestion)}
        textAlign="left"
      >
        {suggestion === "?��번주 ?��?��?��" ? (
          <Box>
            <Box
              padding="8px 12px"
              borderBottom="1px solid white"
              marginTop="8px"
              cursor="pointer"
              onClick={() => handleSuggestionClick("?��번주 ?��?��?��")}
            >
              <Center>
                <Text color="white" fontWeight="bold">
                  ?��번주 ?��?��?��
                </Text>
              </Center>
            </Box>
            {showMovieSuggestions && (
              <Box
                padding="8px 12px"
                textAlign="left"
                cursor="pointer"
                onClick={() => handleSuggestionClick("?��번주 ?��?��?��")}
              >
                <Stack direction="row" align="center" spacing={2} marginTop="8px">
                  <Box width="80px" height="160px" borderRadius="4px" overflow="hidden">
                    <img
                      src="https://nextstagefolder1.s3.ap-northeast-2.amazonaws.com/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg"
                      alt="?��번주 ?��?��?��"
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </Box>
                  <Text color="white" marginTop="8px">?��?��?��?�� ?��?��</Text>
                </Stack>
              </Box>
            )}
          </Box>
        ) : (
          <Text color="white">{suggestion}</Text>
        )}
      </Box>
    ))}
    <Box padding="8px 12px" borderBottom="1px solid white" marginTop="8px">
      <Text color="white" fontWeight="bold">
        ?���? �??��?��
      </Text>
    </Box>
    {popularSuggestions.map((popularSuggestion, index) => (
      <Box
        key={index}
        padding="8px 12px"
        cursor="pointer"
        transition="background-color 0.3s ease"
        _hover={{ backgroundColor: "#444" }}
        onClick={() => handleSuggestionClick(popularSuggestion)}
        textAlign="left"
      >
        <Text color="white">{popularSuggestion}</Text>
      </Box>
    ))}
  </Box>
)}

          </Box>
        </div>
                                {/* 모바?���? �? ?�� �??���? 밑으�? ?��?���?�? 
                <Container>
                  <Flex align="center" mr={5}>
                    {!isMobile && (
                      <Input
                      borderWidth={'2px'}
                      borderRadius='100'
                      borderColor={'#2d6fbb'}
                      variant='outline'
                      placeholder='Search'
                      width='500px'
                      />
                    )}
                  </Flex>
                </Container>*/}
                            </Flex>
                        </Container>


                        <Accordion>
                            <AccordionItem>
                                <h2>
                                    <Box flex={1} align="right">
                                        <Button
                                            style={{
                                                mr: "100px",
                                                border: "none",
                                                backgroundColor: "transparent",
                                            }}
                                        >
                                            <LinkItem
                                                href="./admin"
                                                path={path}
                                            >
                                                �?리자 ?��?���?
                                            </LinkItem>
                                        </Button>

                                        <ColorMode></ColorMode>


                                    </Box>
                                </h2>

                            </AccordionItem>
                        </Accordion>

                        {/* <Box  flex={1} align="right">
          <ColorMode />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Menu1
                </MenuItem>
                <MenuItem as={MenuLink} href="/">
                  Menu2
                </MenuItem>
                <MenuItem as={MenuLink} href="/">
                  Menu3
                </MenuItem>
                <MenuItem as={MenuLink} href="/">
                  Menu3
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/"
                >
                  View
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        */}
                    </Container>

                    <Container textAlign="center">
                        {/*?��비스 ?���?*/}
                        <Menu>
                            <LinkItem href="./service" path={path}>
                                <MenuButton
                                    marginRight="20px"
                                    as={IconButton}
                                    fontSize="lg"
                                    aria-label="Options"
                                    variant="unstyled"
                                    _hover={{ bg: "transparent !important" }}
                                    _focus={{ none: true }}
                                    zIndex="1"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    ?��비스 ?���?
                                </MenuButton>
                            </LinkItem>
                            <MenuList
                                isOpen={true}
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    display: "block",
                                }}
                            >
                                <MenuItem>Item 1</MenuItem>
                                <MenuItem>Item 2</MenuItem>
                            </MenuList>
                        </Menu>
                        {/*?��과소�?*/}
                        <Menu>

                            <MenuButton
                                marginRight="20px"
                                as={IconButton}
                                fontSize="lg"
                                variant="unstyled"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                ?���? ?���?
                            </MenuButton>

                            <MenuList
                                isOpen={true}
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    display: "block",
                                }}
                            >
                                <Link
                                    color="inactiveColor"
                                    href="https://musical.chungwoon.ac.kr/musical/index.do"
                                >
                                    <MenuItem>
                                        <span>뮤�??컬학�?</span>
                                    </MenuItem>
                                </Link>
                                <Link
                                    color="inactiveColor"
                                    href="https://bf.chungwoon.ac.kr/bf/index.do"
                                >
                                    <MenuItem>
                                        <span>방송?��?���?</span>
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>

                        {/*공�???��?��*/}
                        <Menu>
                            <LinkItem href="./announcement" path={path}>
                                <MenuButton
                                    marginRight="20px"
                                    as={IconButton}
                                    fontSize="lg"
                                    variant="unstyled"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    공�???��?��
                                </MenuButton>
                            </LinkItem>
                            <MenuList
                                isOpen={true}
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    display: "block",
                                }}
                            >
                                <MenuItem>
                                    <span>?��?��?��?��?��.</span>
                                </MenuItem>
                            </MenuList>
                        </Menu>

                        {/* <LinkItem
             target="_blank"
             href="/"
             path={path}
             display="inline-flex"
             alignItems="center"
             style={{ gap: 4 }}
             pl={2}
           >
             Manu4
           </LinkItem> */}

                        <Box>
                            <br />
                            <br />
                        </Box>
                    </Container>
                    <Divider mb={0} mt={-5} orientaion="horizontal" />
                </Box>
            </VStack>
        </Fragment>
    );
};

export default Navbar;
