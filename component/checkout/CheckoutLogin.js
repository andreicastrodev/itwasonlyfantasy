import { Box, Text } from "@chakra-ui/react";
import Link from 'next/link'
const CheckoutLogin = () => {



    return <Box>
        <Text>Already hanve an account?
            <Link href="/">Login</Link>
            for a faster checkout
        </Text>
    </Box>

}



export default CheckoutLogin;