import { forwardRef, Fragment } from 'react'
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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  ButtonGroup,
  Text,
  VStack,
  Center,
  Divider
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
    <Fragment>
    <VStack>
    <Box
      position="flex"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{backdropFilter: 'blur(5px)'}}
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
        {/*로고 아이콘*/}
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />  
        </Heading>

        <Container>
          <Flex align="center" mr={5}>
            
            {/*검색바*/}
          <Input            
                borderWidth={'2px'} borderRadius='100' borderColor={'#2d6fbb'}
                variant='outline'
                placeholder='Search'
                //htmlSize={20} width='auto'
                width='500px'
                
                />
          </Flex>
        </Container>
        
          
     
        
        
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
                        <Text fontsize={{ base: '24px', md: '40px', lg: '56px'}}>Menu1</Text>
                      </MenuItem>
                    </AccordionButton>
                
                    <AccordionButton>
                      <MenuItem as={MenuLink} href="/">
                        <Text fontsize={{ base: '24px', md: '40px', lg: '56px'}}>Menu2</Text>
                      </MenuItem>
                    </AccordionButton>
                
                    <AccordionButton>
                      <MenuItem as={MenuLink} href="/">
                        <Text fontsize={{ base: '24px', md: '40px', lg: '56px'}}>Menu3</Text>
                      </MenuItem>
                    </AccordionButton>

                    <AccordionButton>
                      <MenuItem as={MenuLink} href="/">
                        <Text fontsize={{ base: '24px', md: '40px', lg: '56px'}}>Menu4</Text>
                      </MenuItem>
                    </AccordionButton>
                       대머리 
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
      <Container
      mb={10}
      >
        {/*네비바 메뉴 버튼 */}
     
        <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }} 
          >
            <Menu>
              <MenuButton as={Button}>
                <LinkItem href="/" path={path}>
                  Menu1
                </LinkItem>
              </MenuButton>

              <MenuList>
                <MenuItem><span>와우 폼  미쳤다</span></MenuItem>
                <MenuItem><span>이게 되네</span></MenuItem>
              </MenuList>
            </Menu>

        
            <Menu>
              <MenuButton as={Button}>
                <LinkItem href="/" path={path}>
                  Menu2
                </LinkItem>
              </MenuButton>
              <MenuList>
                <MenuItem><span>안녕하세요.</span></MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button}>
                <LinkItem href="/" path={path}>
                  Menu3
                </LinkItem>
              </MenuButton>
              <MenuList>
                <MenuItem><span>와우.</span></MenuItem>
              </MenuList>
            </Menu>
            
            <Menu>
              <MenuButton as={Button}>
                <LinkItem href="/" path={path}>
                  Menu4
                </LinkItem>
              </MenuButton>
              <MenuList>
                <MenuItem><span>이게 진짜 되네요.</span></MenuItem>
              </MenuList>
            </Menu>
            
            
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
        
      </Container>
      <Divider mb={5} mt={-5} orientaion = 'horizontal' />
    </Box>
    </VStack>
    </Fragment>
  )
}

export default Navbar