
import { Box } from '@chakra-ui/react'
import { Input, Stack, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { PhoneIcon, CheckIcon } from '@chakra-ui/icons'
function Login() {
    return (
        <Box w='100%' p={4} color='black'>
            primero
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Phone number' />
                </InputGroup>

                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        children='$'
                    />
                    <Input placeholder='Enter amount' />
                    <InputRightElement children={<CheckIcon color='green.500' />} />
                </InputGroup>
            </Stack>
        </Box>
    )
}
export default Login