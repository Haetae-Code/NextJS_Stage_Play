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
 Stack
} from '@chakra-ui/react'
import react from 'react'

//이번주에 한 일: 간격 조정/ 홈페이지 들어가자마자 나오는 오류 해결, 날짜 추가, 버튼 위치 조정
//카드사이즈 조정 -> 찾아봐야함

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
            alt='뮤지컬~~~' />
            
          <CardBody>
            
            <Heading size='md'>작품명</Heading>
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
        <FormControl isRequired>
        <FormLabel>이름</FormLabel>
        <Input placeholder='필수기재' />
        <print>&nbsp;</print>
        </FormControl>
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