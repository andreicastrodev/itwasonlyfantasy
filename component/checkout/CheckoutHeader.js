import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Link from 'next/link'
const CheckoutHeader = () => {



    return <Flex borderBottom="1px solid gray" p="2rem" alignItems="center">
        <Flex alignItems="center">
            <Heading fontWeight="400" fontSize="2rem" fontFamily="times new roman,times,serif" ml="9rem" flexBasis="100%" textAlign="center">
                it was only fantasy...
            </Heading>
            <Heading ml="1rem" fontSize="1.8rem" color="gray.300">CHECKOUT</Heading>
        </Flex>
        <Spacer />
        <Link href="/home"><Text cursor="pointer" textDecor="underline">Continue Shopping</Text></Link>

    </Flex>
}


export default CheckoutHeader;