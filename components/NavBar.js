import React, { forwardRef, Fragment, useState, useEffect } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import {
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
    ListItem
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

      //검색창 확인을 위해.

      const [showSuggestions, setShowSuggestions] = useState(false);
      const [suggestions, setSuggestions] = useState([
        "추천검색어1",
        "추천검색어2",
        "추천검색어3",
        "추천검색어4",
      ]);
    
      const handleSearchClick = () => {
        setShowSuggestions(!showSuggestions);
      };

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
                        {/*로고 아이콘*/}
                        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                            <Logo />
                        </Heading>

                        <Container>

                            <Flex align="center" mr={5}>
                            <div style={{ position: "relative" }}>
                                {/*검색바*/}
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
              width="500px"
              backgroundColor="white"
              border="1px solid #ccc"
              borderRadius="4px"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
              zIndex={1}
              marginTop="4px" // 이 부분 추가
            >
              {suggestions.map((suggestion, index) => (
                <Text
                  key={index}
                  padding="8px 12px"
                  cursor="pointer"
                  transition="background-color 0.3s ease"
                  _hover={{ backgroundColor: "#f5f5f5" }}
                >
                  {suggestion}
                </Text>
              ))}
            </Box>
          )}
        </div>
                                {/* 모바일로 볼 때 검색바 밑으로 내려가게 
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
                                                관리자 페이지
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
                        {/*서비스 소개*/}
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
                                    서비스 소개
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
                        {/*학과소개*/}
                        <Menu>

                            <MenuButton
                                marginRight="20px"
                                as={IconButton}
                                fontSize="lg"
                                variant="unstyled"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                학과 소개
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
                                        <span>뮤지컬학과</span>
                                    </MenuItem>
                                </Link>
                                <Link
                                    color="inactiveColor"
                                    href="https://bf.chungwoon.ac.kr/bf/index.do"
                                >
                                    <MenuItem>
                                        <span>방송영화과</span>
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>

                        {/*공지사항*/}
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
                                    공지사항
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
                                    <span>안녕하세요.</span>
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
