import { Box, Flex } from "@chakra-ui/react";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutSummary from "./CheckoutSummary";

const Checkout = () => {

    return <Box>
        <CheckoutHeader />
        <Flex mt="5rem !important" w="75%" margin="0 auto">
            <Box flexBasis="50%" >
                <CheckoutDetails />
            </Box>

            <Box margin="0 auto" flexBasis="50%">
                <CheckoutSummary />
            </Box>
        </Flex>

    </Box>
}



export default Checkout;