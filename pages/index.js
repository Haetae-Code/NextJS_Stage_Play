import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Flex
} from '@chakra-ui/react'
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React from 'react'
import ImageSlider from '../components/MainImageSlider'


const Page = () => {
    return (
        <Container>
            <Container  pt={3} ml={1}>
                <ImageSlider/>
                    <Box pl='1' display={'flex'}>
                        <Box flexGrow={1}>
                            <Heading as="h1" variant="page-title">
                                Test h1
                            </Heading>
                            <p>Developer test page</p>
                            <p>Stage Play</p>
                        </Box>
                    </Box>
            </Container>
        </Container>    
    )
}

export default Page
