import React, { Fragment, useState, useEffect } from "react";
import { Container, Input, useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 795px)");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 창 크기 변경 이벤트 핸들러
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 컴포넌트가 마운트될 때 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 함
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions,] = useState([
    //"React",
    //"JavaScript",
    //"Chakra UI",
    //"Next.js",
  ]);

  const handleSearchClick = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <Fragment>
      {isMobile ? (<Container>
        <div
          style={{
            position: "relative",
            width: `${windowWidth-500}px`,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <Input
            borderWidth="2px"
            borderRadius="100"
            borderColor="#2d6fbb"
            variant="outline"
            placeholder="검색어를 입력하세요"
            width="100%"
            onClick={handleSearchClick}
            _focus={{ borderColor: "#2d6fbb" }}
          />
          {showSuggestions && (
            <ul
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                width: "100%",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                listStyle: "none",
                padding: 0,
                margin: 0,
                zIndex: 1,
              }}
            >
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  style={{
                    padding: "10px 16px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    borderBottom: "1px solid #eee",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>):(
        <Container>
        <div
          style={{
            position: "relative",
            width: `${windowWidth-500}px`,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Input
            borderWidth="2px"
            borderRadius="100"
            borderColor="#2d6fbb"
            variant="outline"
            placeholder="검색어를 입력하세요"
            width="100%"
            onClick={handleSearchClick}
            _focus={{ borderColor: "#2d6fbb" }}
          />
          {showSuggestions && (
            <ul
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                width: "100%",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                listStyle: "none",
                padding: 0,
                margin: 0,
                zIndex: 1,
              }}
            >
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  style={{
                    padding: "10px 16px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    borderBottom: "1px solid #eee",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>)}
      
    </Fragment>
  );
};

export default Navbar;
