import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Text,
    Button,
    Select
} from '@chakra-ui/react';
const Signup = () => {



    return <Box >
        <form action="">
            <Flex direction="column">
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input  type="email" />
                </FormControl>
                <Flex justifyContent="space-between">
                    <FormControl w="40%" mt="1rem" id="password">
                        <FormLabel>Password</FormLabel>
                        <Input  type="password" />
                    </FormControl>
                    <FormControl w="40%" mt="1rem" id="password">
                        <FormLabel>Confirm password</FormLabel>
                        <Input  type="password" />
                    </FormControl>
                </Flex>
                <Flex justifyContent="space-between">
                    <FormControl w="40%" mt="1rem" id="password">
                        <FormLabel>First name</FormLabel>
                        <Input  type="text" />
                    </FormControl>
                    <FormControl w="40%" mt="1rem" id="password">
                        <FormLabel>Last name</FormLabel>
                        <Input  type="text" />
                    </FormControl>
                </Flex>
                <FormControl mt="1rem" id="password">
                    <FormLabel>Address</FormLabel>
                    <Input  type="text" />
                </FormControl>
                <FormControl mt="1rem" id="password">
                    <FormLabel>City</FormLabel>
                    <Input  type="text" />
                </FormControl>
                <Flex justifyContent="space-between">
                    <FormControl w="45%" mt="2rem" isRequired>
                        <FormLabel>Country</FormLabel>
                        <Select placeholder='Select your country'>
                            <option value='option1'>Philippines</option>
                        </Select>
                    </FormControl>
                    <FormControl w="45%" mt="2rem" isRequired>
                        <FormLabel>Region</FormLabel>
                        <Select placeholder='Select your region'>
                            <option value='option1'>NCR</option>
                        </Select>
                    </FormControl>
                </Flex>

                <Flex justifyContent="space-between" mt="2rem">
                    <FormControl w="45%" isRequired>
                        <FormLabel>Postal code</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <FormControl w="45%" isRequired>
                        <FormLabel>Phone</FormLabel>
                        <Input type='text' />
                    </FormControl>
                </Flex>
                <Flex mt="2rem" direction="column">
                    <Text>Captcha placeholder</Text>
                    <Button mb="1rem" borderRadius="none" alignSelf="center" mt="1rem" w="100%" colorScheme="twitter">Signup</Button>
                </Flex>
            </Flex>
        </form>
    </Box>
}


export default Signup;