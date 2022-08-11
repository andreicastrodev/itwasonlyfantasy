import { Box, Flex, Text, FormControl, Input, Button, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { AiFillTag } from 'react-icons/ai'
import { GrNotes } from 'react-icons/gr'

const CartAdditionals = () => {

    const [isShown, setIsShown] = useState(false);

    const toggleHandler = () => {

        setIsShown((prevState) => {
            return !prevState
        })
    }

    return <Flex borderTop="1px solid gray">
        <Box w="50%" mt="2rem">
            <Flex onClick={toggleHandler} cursor="pointer" alignItems="center">
                <AiFillTag />
                <Text ml="5px">Enter a promo code</Text>
            </Flex>
            {isShown && <FormControl mt="1rem">
                <Flex>
                    <Input borderRadius="none" type='text' placeholder="Enter a promo code" />
                    <Button w="40%" bgColor="white" border="1px solid black" borderRadius="none">Apply</Button>
                </Flex>
            </FormControl>}

            <Flex mt="2rem" alignItems="center">
                <GrNotes />
                <Text ml="5px">Add a note</Text>
            </Flex>
            <FormControl w="100%" mt="1rem">
                <Textarea borderRadius="none" type='text' placeholder="Instructions? Special Requests? Add them here" />
            </FormControl>
        </Box >
    </Flex >
}


export default CartAdditionals