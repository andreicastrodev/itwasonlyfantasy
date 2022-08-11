import {
    Box, Flex, Text, FormControl, NumberInput,
    NumberInputField, NumberIncrementStepper,
    NumberDecrementStepper, NumberInputStepper, Heading
} from "@chakra-ui/react"
import { ImCross } from 'react-icons/im'
import Image from "next/image"
const CartDetails = () => {


    return <>
        <Heading p="1rem 0" borderBottom="1px solid gray" fontWeight="500" fontSize="1.3rem">My Cart</Heading>
        <Flex justifyContent="space-evenly" p="1rem">
            <Box flexBasis="30%">
                <Image placeholder="blur" blurDataURL='/resources/shop/green-tee-1.webp' src='/resources/shop/green-tee-1.webp' width={150}
                    height={150} />
            </Box>
            <Flex flexBasis="50%" direction="column">
                <Text>fantasy tee cream</Text>
                <Text mt="1rem" fontSize=".9rem" color="gray">$30.00</Text>
                <Text fontSize=".9rem" color="gray">Size: Medium</Text>
            </Flex>
            <FormControl>
                <Flex justifyContent="space-around" alignItems="center">
                    <NumberInput w="25%" mt=".5rem" defaultValue={1} max={5} min={1}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Text>$30.00</Text>
                    <ImCross cursor="pointer" color="gray" width={4} height={4} />

                </Flex>
            </FormControl>

        </Flex >
    </ >

}


export default CartDetails