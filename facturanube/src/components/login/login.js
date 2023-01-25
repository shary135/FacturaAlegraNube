
import { Box, Center } from '@chakra-ui/react'
import { Input, Stack, InputGroup, InputLeftElement, InputRightElement,Button } from '@chakra-ui/react'
import { PhoneIcon, CheckIcon, UnlockIcon } from '@chakra-ui/icons'
import { FaUserAlt } from 'react-icons/fa'

import { HiUserCircle, HiKey } from 'react-icons/hi'
import { Icon } from '@chakra-ui/react'

function Login() {
    return (
        <Box w='100%' p={4} color='black' bg="#CBEDD5">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Stack spacing={4} bg="#62B6B7" w="50%" m="auto" p="15px" borderRadius={"15px"}>
                <Center>
                    <Box bg="#97DECE" w="170px" p="30px"
                        borderRadius="110px" top="10" pos="absolute" >
                        <Center>
                            <Icon as={HiUserCircle} boxSize={95} />
                        </Center>
                    </Box>
                </Center>

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
                    <Input placeholder='Contraseña' _placeholder={{ color: 'inherit' }} />
                </InputGroup>

                <Button colorScheme='teal' size='lg'>
                    Button
                </Button>
            </Stack>
        </Box>
    )
}
export default Login