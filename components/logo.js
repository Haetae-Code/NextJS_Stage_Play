import Link from 'next/link'
import { Text, useColorModeValue, chakra } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const CwuLogoImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>
      <LogoBox>
      <CwuLogoImage
                  src="/asset/image/cwulogo.png"
                  alt='cwulogo'
                  borderRadius="10"
                  width="100"
                  height="90"
              />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        //   fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Stage Play
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo