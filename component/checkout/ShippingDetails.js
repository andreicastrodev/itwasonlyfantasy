import {
    Heading,
    FormControl,
    FormLabel,
    Input,
    Select,
    Flex,
    Box,
    Button
} from "@chakra-ui/react";

const ShippingDetails = () => {



    return <Flex direction="column">
        <Heading fontSize="1.5rem" mb="2rem">1 Shipping details</Heading>
        <form>
            <FormControl isRequired>
                <FormLabel>Email for order confirmation</FormLabel>
                <Input type='email' />
            </FormControl>
            <Flex justifyContent="space-between" mt="2rem">
                <FormControl w="45%" isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input type='text' />
                </FormControl>
                <FormControl w="45%" isRequired>
                    <FormLabel>Last name</FormLabel>
                    <Input type='text' />
                </FormControl>
            </Flex>
            <FormControl mt="2rem" isRequired>
                <FormLabel>Address</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl mt="2rem" isRequired>
                <FormLabel>City</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl mt="2rem" isRequired>
                <FormLabel>Country</FormLabel>
                <Select placeholder='Select your country'>
                    <option value='option1'>Philippines</option>
                </Select>
            </FormControl>
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
            <Button mt="2rem" w="100%">Continue</Button>
        </form>
    </Flex>
}


export default ShippingDetails;