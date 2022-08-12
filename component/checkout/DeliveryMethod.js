import { Box, Button, Flex, FormControl, FormLabel, Radio, RadioGroup, Text } from "@chakra-ui/react"

const DeliveryMethod = () => {


    return <>
        <form action="">
            <Box mt="2rem" border="1px solid black" p=" 1.5rem 2rem">

                <Flex align="center">
                    <FormControl as='fieldset'>
                        <Flex align="center">
                            <RadioGroup flexBasis="10%" defaultValue='intminter'>
                                <Radio value='intminter' />
                            </RadioGroup>
                            <Flex direction="column">
                                <FormLabel as='legend'>Priority Mail International</FormLabel>
                                <Text color="gray">pre-order 2-3 weeks</Text>
                            </Flex>

                        </Flex>
                    </FormControl>
                    <Text>$42.22</Text>
                </Flex>
            </Box>
            <Button mt="2rem" w="100%">Continue</Button>
        </form>
    </>

}


export default DeliveryMethod 