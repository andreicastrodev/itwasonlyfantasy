import { Box, Flex, FormControl, FormLabel, Input, Text, Checkbox, Select, Icon } from "@chakra-ui/react";
import { AiFillCreditCard } from 'react-icons/ai'
import { useState } from "react";
import ShippingDetails from "./ShippingDetails";

const Payment = () => {
    const [isChecked, setIsChecked] = useState(true);

    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [cardNumber, setCardNumber] = useState('')

    const toggleCheckboxHandler = () => {

        setIsChecked((prevState) => {
            return !prevState
        })
    }


    const onCardChangeHandler = (e) => {
        var val = e.target.value;
        setCardNumber(val.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '));
    }
    return <Box mt="2rem" >
        <form action="">
            <Flex bg="gray.100" p="1rem 2rem" direction="column">
                <FormControl mt="2rem" isRequired>
                    <FormLabel>Card number</FormLabel>
                    <Input type="tel" value={cardNumber} onChange={onCardChangeHandler} maxLength={20} />
                </FormControl>
                <Flex justifyContent="space-between" mt="2rem">
                    <FormControl w="45%" isRequired>
                        <FormLabel>Expiration Month</FormLabel>
                        <Select placeholder='MM'>
                            <option value='option1'>01</option>
                            <option value='option2'>02</option>
                            <option value='option3'>03</option>
                        </Select>
                    </FormControl>
                    <FormControl w="45%" isRequired>
                        <FormLabel>Expiration Year</FormLabel>
                        <Select placeholder='YY'>
                            <option value='option1'>22</option>
                            <option value='option2'>23</option>
                            <option value='option3'>24</option>
                        </Select>
                    </FormControl>
                </Flex>
                <FormControl mt="2rem" w="30%" isRequired>
                    <FormLabel>CVC</FormLabel>
                    <Flex align="center">
                        <Input maxLength="4" type='text' />
                        <Icon ml="1rem" w={7} h={7} as={AiFillCreditCard} />
                    </Flex>
                </FormControl>
                <FormControl mt="2rem" isRequired>
                    <FormLabel>Card holder name</FormLabel>
                    <Input type='text' />
                </FormControl>
            </Flex>

            <Text mt="2rem" fontSize="1.1rem">Billing Address</Text>
            <Checkbox value={isChecked} onChange={toggleCheckboxHandler} mt="1rem" defaultChecked>Same as shipping address</Checkbox>

            {!isChecked && (<Box>
                <ShippingDetails isBilling={true} />
            </Box>)}

        </form>
    </Box>
}


export default Payment;