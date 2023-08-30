import React, { forwardRef, Fragment, useState, useEffect } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Heading,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Input,
  Accordion,
  AccordionItem,
  Button,
  Text,
  VStack,
  Divider,
  useMediaQuery,
  Stack,
  Center,
  VisuallyHidden,
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
  const [isMobile] = useMediaQuery("(max-width: 795px)");

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
    "이번주 상영작",
  ]);
  const popularSuggestions = ["인기 검색어 1", "인기 검색어 2", "인기 검색어 3"];

  const handleSearchClick = () => {
    setShowSuggestions(!showSuggestions);
    //선택 검색어 로직 처리해야함
  };

  const showMovieSuggestions = suggestions.includes("이번주 상영작");

  return (
    <Fragment>
      <VStack>
        <Box
          as="nav"
          w="100%"
          bg={useColorModeValue("#ffffff40", "#20202380")}
          css={{ backdropFilter: "blur(5px)" }}
          zIndex={2}
          {...props}
        >
          {/* 로고, 관리자 컨테이너  */}
          <Container
            display="flex"
            alignItems="center"
            maxW="container.xl"
            justifyContent={"space-between"}>

            {/*로고 아이콘*/}
            <Box>
                <Logo />
            </Box>

            {/*검색바*/}
            <Container>
              {!isMobile && (
                <Box position="relative" >
                  <Box>
                    <Input
                      borderWidth="2px"
                      borderRadius="20"
                      borderColor={"#2d6fbb"}
                      variant="outline"
                      placeholder="Search"
                      width="100%"
                      onClick={handleSearchClick}
                    />
                  </Box>
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
                          최근 검색어
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
                          {suggestion === "이번주 상영작" ? (
                            <Box>
                              <Box
                                padding="8px 12px"
                                borderBottom="1px solid white"
                                marginTop="8px"
                                cursor="pointer"
                                onClick={() => handleSuggestionClick("이번주 상영작")}
                              >
                                <Center>
                                  <Text color="white" fontWeight="bold">
                                    이번주 상영작
                                  </Text>
                                </Center>
                              </Box>
                              {showMovieSuggestions && (
                                <Box
                                  padding="8px 12px"
                                  textAlign="left"
                                  cursor="pointer"
                                  onClick={() => handleSuggestionClick("이번주 상영작")}
                                >
                                  <Stack direction="row" align="center" spacing={2} marginTop="8px">
                                    <Box width="80px" height="160px" borderRadius="4px" overflow="hidden">
                                      <img
                                        src="https://bit.ly/dan-abramov"
                                        alt="이번주 상영작"
                                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                      />
                                    </Box>
                                    <Text color="white" marginTop="8px">오페라의 유령</Text>
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
                          인기 검색어
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
              )}
            </Container>

            {/* 다크 모드 */}
            <Box ml={100}>
              <ColorMode></ColorMode>
            </Box>
          </Container>


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

          {/* 모바일 검색바 */}
            <Container>
              {isMobile &&(
                <Box position="relative" >
                  <Box>
                    <Input
                      borderWidth={"2px"}
                      borderRadius="20"
                      borderColor={"#2d6fbb"}
                      variant="outline"
                      placeholder="Search"
                      width="100%"
                      onClick={handleSearchClick}
                    />
                  </Box>
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
                          최근 검색어
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
                          {suggestion === "이번주 상영작" ? (
                            <Box>
                              <Box
                                padding="8px 12px"
                                borderBottom="1px solid white"
                                marginTop="8px"
                                cursor="pointer"
                                onClick={() => handleSuggestionClick("이번주 상영작")}
                              >
                                <Center>
                                  <Text color="white" fontWeight="bold">
                                    이번주 상영작
                                  </Text>
                                </Center>
                              </Box>
                              {showMovieSuggestions && (
                                <Box
                                  padding="8px 12px"
                                  textAlign="left"
                                  cursor="pointer"
                                  onClick={() => handleSuggestionClick("이번주 상영작")}
                                >
                                  <Stack direction="row" align="center" spacing={2} marginTop="8px">
                                    <Box width="80px" height="160px" borderRadius="4px" overflow="hidden">
                                      <img
                                        src="https://bit.ly/dan-abramov"
                                        alt="이번주 상영작"
                                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                      />
                                    </Box>
                                    <Text color="white" marginTop="8px">오페라의 유령</Text>
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
                          인기 검색어
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
              )}
            </Container>

          {/* 소개란 */}
          <Container textAlign="center" mt={3}>
            {/*서비스 소개*/}
            <Menu>
              <LinkItem href="./service" path={path}>
                <MenuButton
                  as={IconButton}
                  mr="20px"
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
            </Menu>

            {/*학과소개*/}
            <Menu>
              <MenuButton
                mr="20px"
                as={IconButton}
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
                  mr="20px"
                  as={IconButton}
                  variant="unstyled"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  공지사항
                </MenuButton>
              </LinkItem>
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

          </Container>
          <Divider mb={5} />
        </Box>
      </VStack>
    </Fragment>
  );
};

export default Navbar;
