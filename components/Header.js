//import Link from 'next/Link';
import { Box, chakra, Container, useColorModeValue} from '@chakra-ui/react'
import Image from 'next/image'

const CwuLogoImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const linkStyle = {
  marginRight: '1rem'
}

const Header = () => {
  return (
    <Container pt='5' w='100' ml='20'>
        <Box>
            <CwuLogoImage
                src="/asset/image/cwulogo.png"
                alt='cwulogo'
                borderRadius="10"
                width="100"
                height="90"
            />
        </Box>
        {/* <div>
            <Link href="/"><p style={linkStyle}> 홈 </p></Link>
            <Link href="/about"><p style={linkStyle}> 소개 </p></Link>
        </div> */}
    </Container>
  )
}
export default Header