import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Text,
    Button,
} from '@chakra-ui/react';
const Login = () => {



    return <Box >
        <form action="">
            <Flex direction="column">
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input border="none" borderRadius="none" borderBottom="1px solid black" type="email" />
                </FormControl>
                <FormControl mt="1rem" id="password">
                    <FormLabel>Password</FormLabel>
                    <Input border="none" borderRadius="none" borderBottom="1px solid black" type="password" />
                </FormControl>

                <Flex mt="2rem" direction="column">
                    <Text textDecor="underline">Forgot password?</Text>
                    <Button borderRadius="none" mt="1rem" colorScheme="twitter">Login</Button>
                </Flex>
            </Flex>
        </form>
    </Box>
}


export default Login;