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
 tr,
 table
} from '@chakra-ui/react'
import react from 'react'


//사이즈 늘리고 버튼 위치, 사이 공백 정도?
//여기에서는 문제가 발생했다고 뜨지 않지만 홈페이지 접속시 발생하는 오류 해결해야함.//unhandled runtime error가 발생함 그 밑에는 call stack
// but. 대략적인 틀은 어느정도 넣어놨음.

//문제점의 이유 발견 -> 테이블 테그 작성시 페이지 오류가 발생
const Page2 = () => {
  
    return(
        //카드부분 좌우로 사이즈 늘림과 동시에 사이즈 고정
        <>

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://bit.ly/dan-abramov'
            alt='뮤지컬~~~' />
          <CardBody>
            <Heading size='md'>작품명</Heading>

            <Text py='2'>
              <table>
                <tr>장소:?</tr>
                <tr>출연진:?</tr>
                <tr>기간:?</tr>
                <tr>시간:?</tr>
              </table>
            </Text>
          </CardBody>
        </Card> 
        
        <FormControl isRequired>
        <FormLabel>이름</FormLabel>
        <Input placeholder='필수기재' />
        </FormControl>
        <FormControl isRequired>
        <FormLabel>전화번호</FormLabel>
        <Input placeholder='필수기재' />
        <Stack direction='row' spacing={4}>
           <Button  colorScheme='blue' variant='outline'>
           인증번호
         </Button>
         </Stack>
        </FormControl>
      
        <HStack>
         <PinInput>
         <PinInputField />
         <PinInputField />
          <PinInputField />
         <PinInputField />
        </PinInput>
      </HStack>
        <Text mb='8px'>배우님에게: {}</Text>
        <Textarea isInvalid placeholder='필수기재' />
     
        <Stack direction='row' spacing={4} align='center'>
        <Button  colorScheme='blue' variant='outline'>
          예약하기
         </Button>
        </Stack>
        </>//사이에 공백이
        


    )
   
    
    
}


export default Page2;