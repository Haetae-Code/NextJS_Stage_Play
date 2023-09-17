import React, { Fragment, useState } from "react";
import { Container, Input } from "@chakra-ui/react";

const Navbar = () => {

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions,] = useState([
    "React",
    "JavaScript",
    "Chakra UI",
    "Next.js",
  ]);

  const handleSearchClick = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <Fragment>
      <Container>
        <div
          style={{
            position: "relative",
            width: "500px",
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
      </Container>
    </Fragment>
  );
};

export default Navbar;
