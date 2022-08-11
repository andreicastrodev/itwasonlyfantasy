import { Box, Flex } from "@chakra-ui/react"
import CartAdditionals from "./CartAdditionals"
import CartDetails from "./CartDetails"
import CartSummary from "./CartSummary"

const Cart = () => {




    return <Flex w="70%" margin="0 auto">
        <Flex flexBasis="65%" direction="column">
            <Box position="scroll"><CartDetails /></Box>
            <Box><CartAdditionals /></Box>
        </Flex>
        <Flex flexBasis="35%">
            <CartSummary />
        </Flex>
    </Flex>
}


export default Cart