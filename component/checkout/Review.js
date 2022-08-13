import { Button, Text, Box, Flex,  } from "@chakra-ui/react"

const Review = () => {



    return <Box mt="2rem">
        <Flex direction="column">
            <Text>Review the order details above,
                and place your order when you're ready.
            </Text>
            <Button mt="1rem">Place Order</Button>
        </Flex>
    </Box>

}

export default Review