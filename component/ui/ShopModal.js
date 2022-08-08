
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

} from '@chakra-ui/react'
import { useRef } from 'react'
import { findShopItemById } from '../../utils/homeImagesArr'
import Image from 'next/image'
import Link from 'next/link'




const ShopModal = ({ itemId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    const itemDetails = findShopItemById(itemId);
    console.log(itemDetails)
    return (
        <>
            <Button onClick={onOpen} fontWeight="200" opacity="100%" bg="rgba(255, 255, 255, 0.75)"
                borderRadius="none" mb="5px" bottom="0"
                w="100%" zIndex="3"
                position="absolute">
                <Text>Quick View</Text>
            </Button>
            <Modal w="100%" finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w={{  base: "500px" }}>
                    <Flex>
                        <Box p="1rem">
                            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-11.webp"
                                src="/resources/gallery/gal-11.webp" width={400} height={500} />

                        </Box>
                        <Flex flexBasis="50%" p="1rem" direction="column">
                            <Text fontSize="1.6rem" font alignSelf="start">{itemDetails.title}</Text>
                            <Text mt="5px" fontSize="1.2rem" alignSelf="start">${itemDetails.price.toFixed(2)}</Text>
                            <ModalCloseButton />
                            <ModalBody>
                                <Flex mt="1.4rem"  p="0" alignItems="flex-start">
                                    <form style={{
                                        width: '100%'
                                    }}>
                                        <FormControl>
                                            <FormLabel>Size</FormLabel>
                                            <Select w="80%" mt="1rem">
                                                <option value='option1'>Small</option>
                                                <option value='option2'>Medium</option>
                                                <option value='option3'>Large</option>
                                                <option value='option3'>XL</option>
                                                <option value='option3'>XLL</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl mt="1rem">
                                            <FormLabel>Quantity</FormLabel>
                                            <NumberInput w="30%" mt=".5rem" defaultValue={1} max={5} min={1}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>
                                        <Button colorScheme='twitter' w="100%" mt="3rem">Add to cart</Button>
                                        <Box fontWeight="500" mt="1rem">
                                            <Link  href="/">view more details</Link>
                                        </Box>
                                    </form>
                                </Flex>
                            </ModalBody>
                        </Flex>
                    </Flex>

                </ModalContent>
            </Modal>
        </>
    )
}

export default ShopModal;