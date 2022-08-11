import { Box, Text } from "@chakra-ui/react";
import Link from 'next/link'
const CheckoutLogin = () => {



    return <Box m="0 auto" bg="gray.100" p="1rem 2rem">
        <Text>Already have an account?
            <Link href="/"> Login </Link> for a faster checkout
        </Text>
    </Box>

}



export default CheckoutLogin;