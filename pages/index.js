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
import React from 'react'
import ImageSlider from '../components/MainImageSlider'

const Page = () => {
    return (
        <Container maxWidth='100%'>
            <ImageSlider></ImageSlider>
            <Container  pt={3} maxWidth='100%'>
                <Box flexGrow={1} display={'flex'}>
                    <Heading as="h1" variant="page-title">
                        Test h1 this is the maxW test
                    </Heading>
                    <p>Developer test page</p>
                    <p>Stage Play</p>
                    <p>welcome</p>
                </Box>
            </Container>
        </Container>    
    )
}

export default Page