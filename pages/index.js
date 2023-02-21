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





const Page = () => {
    return (


            <Container maxW="600opx" pt={10} ml={14}>
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

    )
}

export default Page
