import { Box, Flex, Heading, Icon, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link"
import CartModal from "../ui/CartModal";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
const Header = () => {


    return <Flex p="2rem" w="100%" direction="column">
        <Flex w="100%" justifyContent="center">
            <Heading fontWeight="400" fontSize="2rem" fontFamily="times new roman,times,serif" ml="9rem" flexBasis="100%" textAlign="center">
                it was only fantasy...
            </Heading>
            <Flex cursor="pointer " alignSelf="end" alignItems="center">
                <ColorModeSwitcher />
                <CartModal />


            </Flex>
        </Flex>


        <UnorderedList letterSpacing="1px" listStyleType="none" w="50%" justifyContent="space-evenly" mt="2rem" alignSelf="center" display="flex">
            <ListItem > <Link href="/home">HOME</Link></ListItem>
            <ListItem > <Link href="/gallery">GALLERY</Link></ListItem>
            <ListItem > <Link href="/shop">SHOP</Link></ListItem>
        </UnorderedList>
    </Flex>
}


export default Header;