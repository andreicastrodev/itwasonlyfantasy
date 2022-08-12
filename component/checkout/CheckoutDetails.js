import { Flex, Box, Heading } from "@chakra-ui/react";
import CheckoutLogin from "./CheckoutLogin";
import DeliveryMethod from "./DeliveryMethod";
import Payment from "./Payment";
import ShippingDetails from "./ShippingDetails";

const CheckoutDetails = () => {

    return <Flex direction="column">
        <CheckoutLogin />
        <Box mt="3rem">
            <Heading fontSize="1.5rem" mb="2rem">1 Shipping details</Heading>

            <ShippingDetails />
        </Box>
        <Box p="1rem 0rem" mt="2rem">
            <Heading fontSize="1.5rem">2 Delivery Method</Heading>
            <DeliveryMethod />
        </Box>
        <Box p="1rem 0rem" mt="2rem">
            <Heading fontSize="1.5rem">3 Payment</Heading>
            <Payment />
        </Box>
    </Flex>
}

export default CheckoutDetails;