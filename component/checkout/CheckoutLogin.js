import { Box, Text } from "@chakra-ui/react";
import AuthModal from "../auth/AuthModal";
const CheckoutLogin = () => {



    return <Box m="0 auto" bg="#f5f5f5" p="1rem 2rem">
        <Text>Already have an account?
            <AuthModal /> for a faster checkout.
        </Text>
    </Box>

}



export default CheckoutLogin;