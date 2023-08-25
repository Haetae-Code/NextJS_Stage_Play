import React, { Fragment, useState } from "react";
import { Container, Input } from "@chakra-ui/react";

const Navbar = (props) => {
  const { path } = props;
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([
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
            borderWidth={"2px"}
            borderRadius="100"
            borderColor={"#2d6fbb"}
            variant="outline"
            placeholder="Search"
            width="500px"
            onClick={handleSearchClick}
          />
          {showSuggestions && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                listStyle: "none",
                padding: 0,
                margin: "4px 0",
              }}
            >
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
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
