import { Box, Flex, Text, FormControl, Input, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import { AiFillTag } from 'react-icons/ai'

const CheckoutSummary = () => {

    const [isShown, setIsShown] = useState(false);

    const toggleHandler = () => {

        setIsShown((prevState) => {
            return !prevState
        })
    }

    return <Box m="0 auto" w="80%" bg="#f5f5f5" p="2rem" position="sticky" top="1rem">
        <Flex direction="column">
            <Flex justify="space-between" >
                <Text>Order summary (3)</Text>
                <Text textDecor="underline"><Link href="/cart">Edit cart</Link></Text>
            </Flex>
            <Flex p="1rem 0" borderBottom="1px solid black" mt="1rem">
                <Box flexBasis="20%">
                    <Image placeholder="blur" blurDataURL='/resources/shop/green-tee-1.webp' src='/resources/shop/green-tee-1.webp' width={80}
                        height={80} />
                </Box>
                <Flex flexBasis="70%" direction="column">
                    <Text>fantasy tee green</Text>
                    <Text>qty: 3</Text>
                    <Text>size: medium</Text>
                </Flex>
                <Text>$90.00</Text>
            </Flex>
            <Flex p="1rem 0" borderBottom="1px solid black" direction="column">
                <Flex onClick={toggleHandler} cursor="pointer" alignItems="center">
                    <AiFillTag />
                    <Text ml="5px">Enter a promo code</Text>
                </Flex>
                {isShown && <FormControl mt="1rem">
                    <Flex direction="column">
                        <Input borderRadius="none" type='text' placeholder="Enter a promo code" />
                        <Button mt="1rem" w="100%" bgColor="white" border="1px solid black" borderRadius="none">Apply</Button>
                    </Flex>
                </FormControl>}
            </Flex>
            <Flex p="1rem 0" borderBottom="1px solid black" direction="column">
                <Flex justify="space-between">
                    <Text>Subtotal</Text>
                    <Text>$90.00</Text>
                </Flex>
                <Flex mt=".5rem" justify="space-between">
                    <Text>Shipping</Text>
                    <Text>$42.00</Text>
                </Flex>
                <Flex mt=".5rem" justify="space-between">
                    <Text>Promo code</Text>
                    <Text>-$12.00</Text>
                </Flex>
                <Flex mt=".5rem" justify="space-between">
                    <Text>Sales Tax</Text>
                    <Text>$0.00</Text>
                </Flex>
            </Flex>
            <Flex mt=".5rem" justify="space-between">
                <Text fontSize="1.7rem">Total</Text>
                <Text fontSize="1.7rem">$142.00</Text>
            </Flex>
        </Flex>
    </Box>
}

export default CheckoutSummary;