import NextLink from "next/link";
import Link from "next/link";
import {
    Text,
    
    
} from "@chakra-ui/react";
import React from "react";



const department = () => {
    return(
        <Text>
            우리 학교 학과를 소개하는 공간이에요
                <br/>
                <Link href="https://musical.chungwoon.ac.kr/musical/index.do">
                    뮤지컬학과&lt;&lt;&lt;&lt;&lt;&lt;바로가기!
                </Link>
                <br/>
                <Link href="https://bf.chungwoon.ac.kr/bf/index.do">
                    방송영화과&lt;&lt;&lt;&lt;&lt;&lt;바로가기!
                </Link>


        </Text>
    )
}

export default department;