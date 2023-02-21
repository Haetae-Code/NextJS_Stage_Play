import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container, Flex } from '@chakra-ui/react'
//import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MinHyeok's portfolio web" />
        <meta name="author" content="MinHyeok Jeon" />
        <title>Dev_Min Hyeok</title>
      </Head>

      {/* <NavBar path={router.asPath} /> */}
      
        <Container>
          {children}
        </Container>
      
    </Box>
  )
}

export default Main