import { Box, Text } from "@chakra-ui/react";
import Link from 'next/link'
const CheckoutLogin = () => {



    return <Box m="0 auto" bg="gray.100" p="1rem 2rem">
        <Text>Already have an account?
            <Text display="inline" textDecor="underline"> <Link href="/"> Login </Link></Text> for a faster checkout.
        </Text>
    </Box>

}



export default CheckoutLogin;