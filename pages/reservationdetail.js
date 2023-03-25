//예약상세 페이지
import NextLink from 'next/link'
import{
 Box,
 Image,
 Container,
 Card,
 CardHeader,
 CardBody,
 CardFooter,
 Heading,
 Text,
 Button,
 Textarea,
 Input,
 FormControl,
 FormLabel,
 PinInput,
 PinInputField,
 HStack,
 colorScheme,
 ButtonGroup,
 Stack,
 Accordion,
 AccordionItem,
 AccordionButton,
 AccordionPanel,
 AccordionIcon,
 Checkbox,
 CheckboxGroup,
 
} from '@chakra-ui/react'
import react from 'react'

//날짜 나머지 구역은 지우기(제이쿼리 사용하면 데이터피커로 편하게 할 수 있음)
//SMS인증번호는 건당 11~30원 정도이고 상업용으로 될 경우(쇼부가 Okay될 경우) 학교측과 얘기해봐야함



const Page2 = () => {
  
  
    return(
      
        <>

        <Card
          direction={{  base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          
          <Image
            objectFit='cover'
             maxW={{ base: '100%', sm: '200px' }}
            src='http://placekitten.com/201/300'
            alt='캣츠' />
            
          <CardBody>
            
            <Heading size='md'>캣츠</Heading>
            <print>&nbsp;&nbsp;&nbsp;</print>
            <Text py='2'>
            장소:?
            </Text>
            <Text py='2'>
            출연진:?
            </Text>
            <Text py='2'>
            기간:?
            </Text>
            <Text py='2'>
            시간:?
            </Text>
            <Text py='2'>
            줄거리: ?
            </Text>

          </CardBody>
          
        </Card> 
        <print>&nbsp;</print>
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          관람시 주의사항
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      구글폼 보니까 코로나 어쩌구로 하면ㄴ서 설명이 ㅉ ㅜㄱ 되어있더라구요? 그래서 추가해보아ㅣㅆ습니다. 뭔가 있는 것 처럼 길게
      적는중인데 제가 지금 뭔 말을 하는지 모르겠고 안녕하세요 반갑습니다. 저는 뮤지컬학과 영화영상? 어쩌구 잘 모르겠고ㅓ요 홍캠에는
      무슨 학과가 있는지 사실 잘 모릅니다. 감사합니다. 
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
<print>&nbsp;</print>

        <FormControl isRequired>
        <FormLabel>이름</FormLabel>
        <Input placeholder='필수기재' />
        <print>&nbsp;</print>
        </FormControl>

        <FormControl isRequired>
        <FormLabel>필수선택</FormLabel>
        </FormControl>
        <Stack spacing={5} direction='row' >
        <Checkbox >재학생</Checkbox> 
        <Checkbox >외부인</Checkbox> 
        </Stack>

       <print>&nbsp;</print>
        <FormLabel>학과</FormLabel>
        <Input placeholder='재학생인경우 필수기재' />
        <print>&nbsp;</print>
        

        
        <FormLabel>학번</FormLabel>
        <Input placeholder='재학생인경우 필수기재' />
        <print>&nbsp;</print>
        
        

        

        
       
        
        <FormControl isRequired> 
        <FormLabel>날짜 선택</FormLabel>
        <Input 
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"/>
        <print>&nbsp;</print>
        </FormControl>
        
        <FormControl isRequired>
        <FormLabel>전화번호</FormLabel>
        <Input placeholder='필수기재' />
        &nbsp;
        <Stack direction='row' spacing={4}>
          
           <Button  colorScheme='blue' variant='outline' >
           인증번호받기
         </Button>
         </Stack>
        </FormControl>
        <print>&nbsp;</print>
        <HStack>
         <PinInput>
         <PinInputField />
         <PinInputField />
          <PinInputField />
         <PinInputField />
        </PinInput>
      </HStack>
      <print>&nbsp;</print>
        <Text mb='8px'>배우님에게: {}</Text>
        <Textarea isInvalid placeholder='필수기재' />
     
        <print>&nbsp;</print>
        <Stack  align='center'> 
        <Button  colorScheme='blue' variant='outline'>
          예약하기
         </Button>
        </Stack>
        </>//사이에 공백이
        


    )
   
    
    
  }



export default Page2;