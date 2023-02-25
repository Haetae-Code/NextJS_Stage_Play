//import Link from 'next/Link';
import { Box, chakra, Container, useColorModeValue, Button, Input, Flex,} from '@chakra-ui/react'
import Image from 'next/image'
import { motion, useMotionValue } from "framer-motion"
import {ColorModeToggleButton} from "./ColorModeButton"
const CwuLogoImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const linkStyle = {
  marginRight: '1rem'
}


const Header = (props) => {
  const { path } = props
  return (
    <Container pt='5' ml='10'>
      <Flex>
          <Box>
              <CwuLogoImage
                  src="/asset/image/cwulogo.png"
                  alt='cwulogo'
                  borderRadius="10"
                  width="100"
                  height="90"
              />
          </Box>
          {/* 검색바 */}
              <Box ml={10} pt='5'>
                <motion.div
                initial={{ scale: 1.5 }} 
                animate={{ scale: 1 }}
                transition={{
                  duration:1,
                  //delay:0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                >
                <Input
                borderWidth={'1px'} borderRadius='100'
                variant='outline'
                placeholder='Search'
                htmlSize={20} width='auto'/>
                </motion.div>
              </Box>
              {/* <ColorModeToggleButton/> */}
          {/* <div>
              <Link href="/"><p style={linkStyle}> 홈 </p></Link>
              <Link href="/about"><p style={linkStyle}> 소개 </p></Link>
          </div> */}
      </Flex>
    </Container>
  )
}
export default Header