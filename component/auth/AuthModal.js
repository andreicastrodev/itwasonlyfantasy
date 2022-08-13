
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Box,
    useDisclosure,
    Text,
    ModalCloseButton,
    ModalHeader,
    Flex


} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Signup from './Signup'
import Login from './Login'



const AuthModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthState = () => {


        setIsLogin((prevState) => {
            return !prevState
        })
    }
    return (
        <>
            <Text cursor="pointer" onClick={onOpen} display="inline" textDecor="underline"> Login</Text>
            <Modal size="full" finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent >
                    <ModalCloseButton />
                    <Flex m="0 auto" direction="column" w="40%">
                        <Flex align="center" direction="column" mb="2rem">
                            <ModalHeader fontSize="3rem">{isLogin ? 'Login' : 'Signup'}</ModalHeader>
                            {
                                isLogin ? (<Text>New Member? <Text display="inline" textDecor="underline" cursor="pointer" onClick={toggleAuthState}>Signup</Text></Text>) :
                                    (<Text>Already have an account? <Text display="inline" textDecor="underline" cursor="pointer" onClick={toggleAuthState}>Login</Text></Text>)
                            }
                        </Flex>
                        {isLogin ? <Login /> : <Signup />}
                    </Flex>


                </ModalContent>
            </Modal>
        </>
    )
}

export default AuthModal;