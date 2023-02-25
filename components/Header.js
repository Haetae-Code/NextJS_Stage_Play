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
          <motion.Box
          initial={{ scale: 1.5 }} 
          animate={{ scale: 1 }}
          transition={{
            duration:0.7,
            //delay:0.5,
          }}
          >
              <CwuLogoImage
                  src="/asset/image/cwulogo.png"
                  alt='cwulogo'
                  borderRadius="10"
                  width="100"
                  height="90"
              />
          </motion.Box>
          {/* 검색바 */}
              <Box ml={10} pt='7'>
                <motion.div
                initial={{ scale: 1.3 }} 
                animate={{ scale: 1 }}
                transition={{
                  duration:0.7,
                  delay:0.3,
                }}
                >
                <Input
                borderWidth={'2px'} borderRadius='100' borderColor={'#2d6fbb'}
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