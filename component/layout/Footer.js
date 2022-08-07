import { Flex, Heading, Icon, Box } from "@chakra-ui/react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs"
const Footer = () => {



    return <Flex mt="5rem" direction="column">
        <Box alignSelf="center">
            <a target="_blank" href="https://www.instagram.com/_onlyfantasy/">
                <Icon as={BsInstagram} w={8} h={8} />
            </a>
        </Box>

        <Heading m="2rem" fontSize="1.4rem" fontFamily="times new roman,times,serif" textAlign="center">
            It was only fantasy...
        </Heading>
    </Flex>
}


export default Footer;