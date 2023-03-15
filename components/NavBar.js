import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
// import { IoLogoGithub } from 'react-icons/io5'
import ColorMode from './ColorModeButton'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="flex"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(5px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={3}
        maxW="container"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
          <Input            
                borderWidth={'2px'} borderRadius='100' borderColor={'#2d6fbb'}
                variant='outline'
                placeholder='Search'
                //htmlSize={20} width='auto'
                width='200px'
                />
        </Flex>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
          <LinkItem href="/" path={path}>
            Menu1
          </LinkItem>
          <LinkItem href="/" path={path}>
            Menu2
          </LinkItem>
          <LinkItem href="/" path={path}>
            Menu3
          </LinkItem>
          <LinkItem href="/" path={path}>
            Menu4
          </LinkItem>
          {/* <LinkItem
            target="_blank"
            href="/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            Manu4
          </LinkItem> */}
        </Stack>

{/* {mob} */}
      <Accordion>
        <AccordionItem>
          <h2>
            <Box  flex={1} align="right">
              <ColorMode />
              <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                <Menu isLazy id="navbar-menu">
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-lable="Options"
                  />

                    <AccordionButton>
                      <MenuItem as={MenuLink} href="/">
                        Menu1
                      </MenuItem>
                    </AccordionButton>
                
                    <AccordionButton>
                      <MenuItem as={MenuLink} href="/">
                        Menu2
                      </MenuItem>
                    </AccordionButton>
                
                    <AccordionButton>
                      <MenuItem as={MenuLink} href="/">
                        Menu3
                      </MenuItem>
                    </AccordionButton>

                    <AccordionButton>
                      <MenuItem as={MenuLink} href="/">
                        Menu4
                      </MenuItem>
                    </AccordionButton>
                       
                </Menu> 
              </Box>             
            </Box>   
          </h2>
          <AccordionPanel pb={4}>
            테스트 삼아서 만들어봤는데 잘 됐으면 좋겠다 메롱.
          </AccordionPanel>
        </AccordionItem>
    </Accordion>
  
        
   {/* <Box  flex={1} align="right">
          <ColorMode />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Menu1
                </MenuItem>
                <MenuItem as={MenuLink} href="/">
                  Menu2
                </MenuItem>
                <MenuItem as={MenuLink} href="/">
                  Menu3
                </MenuItem>
                <MenuItem as={MenuLink} href="/">
                  Menu3
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/"
                >
                  View
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        */}
      </Container>
    </Box>
     
  )
}

export default Navbar