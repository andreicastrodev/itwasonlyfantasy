import { Flex, Heading, Box, Text, Button } from "@chakra-ui/react"
import { BsFillShieldLockFill } from 'react-icons/bs'
import Link from 'next/link'
const CartSumamry = () => {


    return <Flex p="0 1rem" w="100%" direction="column" >
        <Heading p="1rem 0" borderBottom="1px solid gray" fontWeight="500"
            fontSize="1.3rem">Order summary</Heading>
        <Flex direction="column">
            <Flex justify="space-between" mt="1.5rem">
                <Text>Subtotal</Text>
                <Text>$90.00</Text>
            </Flex>
            <Flex justify="space-between" mt=".5   rem">
                <Text>Shipping</Text>
                <Text>$41.00</Text>
            </Flex>
            <Flex mt=".5rem">
                <Text>
                    Zimbabwe
                </Text>
            </Flex>
            <Flex justify="space-between" mt=".5rem">
                <Text>
                    Code
                </Text>
                <Text>
                    -$10.00
                </Text>
            </Flex>
            <Flex justify="space-between" mt="2rem">
                <Text fontWeight="500" fontSize="1.2rem">Total</Text>
                <Text fontWeight="500" fontSize="1.2rem">$141.00</Text>
            </Flex>
            <Flex mt="2rem" direction="column">
                <Link href="/checkout">
                    <Button >
                        Checkout
                    </Button>
                </Link>

                <Flex justifyContent="center" mt="1rem" alignItems="center">
                    <BsFillShieldLockFill />
                    <Text ml=".5rem">Secure Checkout</Text>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}


export default CartSumamry