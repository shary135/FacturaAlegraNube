
import { Box, Center, Text } from '@chakra-ui/react'
import { Input, Stack, InputGroup, InputLeftElement, InputRightElement,Button } from '@chakra-ui/react'
import { PhoneIcon, CheckIcon, UnlockIcon } from '@chakra-ui/icons'
import { FaUserAlt } from 'react-icons/fa'
import {RxEyeClosed,RxEyeOpen} from 'react-icons/rx'

import { HiUserCircle, HiKey } from 'react-icons/hi'
import { Icon } from '@chakra-ui/react'
import { useState } from 'react'

function Login() {
    const [estadoInputPassword, setEstadoInputPassword] = useState("password"); // este input es password
    const [toggle, setToggle] = useState(true)
    function changepassword(val,text){
        setEstadoInputPassword(text)
        console.log(estadoInputPassword)
        setToggle(val)
    }
    return (
        <Box pos="fixed" w='100%' h="100%" m="0" p={4} color='black' bg="#CBEDD5" >
            <br></br>
            <Center>
                <Text fontSize='6xl'>Ferreteria Mijares</Text>
            </Center>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Stack spacing={4} bg="#62B6B7" w="30%" m="auto" p="15px" borderRadius={"15px"} boxShadow='2xl'>
                <Center>
                    <Box bg="#97DECE" w="170px" p="30px"
                        borderRadius="110px"  pos="absolute" >
                        <Center>
                            <Icon as={HiUserCircle} boxSize={95} />
                        </Center>
                    </Box>
                </Center>
                <br></br>
                <br></br>
                <br></br>
                <InputGroup colorScheme="cyan" focusBorderColor="white" variant="filled">
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Icon as={FaUserAlt} color='black' />}
                    />
                    <Input type='tel' placeholder='Usuario' _placeholder={{ color: 'inherit' }} />
                </InputGroup>

                <InputGroup colorScheme="cyan" focusBorderColor="white" variant="filled">
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        children={<Icon as={HiKey} color='black' />}

                    />
                    <Input type={estadoInputPassword} placeholder='Contraseña' _placeholder={{ color: 'inherit' }} />
                    <InputRightElement children={ 
                    toggle  ? <Icon as={RxEyeClosed} color='#439A97'  onClick={function(){
                        changepassword(false,"text")
                    }}/> :
                    <Icon as={RxEyeOpen} color='#439A97' onClick={function(){
                        changepassword(true, "password")
                    }} />
                    } />
                </InputGroup>

                <Button colorScheme='teal' size='lg'>
                    INGRESAR
                </Button>
            </Stack>
        </Box>
    )
}
export default Login