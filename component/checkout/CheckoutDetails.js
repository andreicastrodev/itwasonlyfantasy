import { Flex, Box, Heading } from "@chakra-ui/react";
import CheckoutLogin from "./CheckoutLogin";
import ShippingDetails from "./ShippingDetails";

const CheckoutDetails = () => {

    return <Flex direction="column">
        <CheckoutLogin />
        <Box mt="3rem">
            <ShippingDetails />
        </Box>
        <Box p="1rem 0rem" borderBottom="1px solid black" mt="2rem">
            <Heading fontSize="1.5rem">2 Delivery Method</Heading>
        </Box>
    </Flex>
}

export default CheckoutDetails;