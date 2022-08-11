
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Flex,
    Box,
    FormControl,
    FormLabel,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInput,
    Select,
    Heading,
    Icon
} from '@chakra-ui/react'
import { BsCartFill } from "react-icons/bs"

import { useRef } from 'react'
import { findShopItemById } from '../../utils/homeImagesArr'
import Image from 'next/image'
import Link from 'next/link'





const CartModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    return (
        <>
            <Flex onClick={onOpen} ml="2rem">
                <Icon mr="10px" w={6} h={6} as={BsCartFill} />
                <span>0</span>
            </Flex>

            <Modal w="100%" finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent right="0" top="-59px" borderRadius="none" position="absolute" w={{ base: "400px" }}>
                    <Flex flexBasis="50%" p="1rem" direction="column">
                        <ModalCloseButton />
                        <ModalHeader fontSize="1.7rem" textAlign="center">Cart</ModalHeader>
                        <ModalBody>
                            <Flex direction="column" mt="1.4rem" p="0" alignItems="flex-start">
                                <form style={{
                                    width: '100%'
                                }}>
                                    <Box position="scroll" h="50vh">
                                        <FormControl>
                                            <Flex justifyContent="space-between">
                                                <Box>
                                                    <Image placeholder="blur" blurDataURL='/resources/shop/green-tee-1.webp' src='/resources/shop/green-tee-1.webp' width={80}
                                                        height={80} />
                                                </Box>
                                                <Flex direction="column">
                                                    <Text>fantasy tee green</Text>
                                                    <Text>$30.00</Text>
                                                    <NumberInput w="35%" mt=".5rem" defaultValue={1} max={5} min={1}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </Flex>

                                            </Flex>
                                        </FormControl>
                                    </Box>

                                    <Flex p=" 1rem 0" borderTop="1px solid black" direction="column" mt="3rem">
                                        <Text fontSize="1.5rem">Sub total</Text>
                                        <Text fontSize="1.5rem">$300.00</Text>
                                    </Flex>
                                    <Link href="/cart">
                                        <Button onClick={onClose} colorScheme='twitter' w="100%" mt="3rem">Checkout Page</Button>
                                    </Link>

                                </form>
                            </Flex>
                        </ModalBody>
                    </Flex>


                </ModalContent>
            </Modal>
        </>
    )
}

export default CartModal;