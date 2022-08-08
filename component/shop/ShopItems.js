import { Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import { SHOP_IMG_ARR } from "../../utils/homeImagesArr"
import ShopItem from "./ShopItem"



const ShopItems = () => {


    return <Flex w="100%" justifyContent="space-evenly">
        {SHOP_IMG_ARR.map(item => {
            return <ShopItem id={item.id} key={item.id} title={item.title} price={item.price} images={item.images} />
        })}
    </Flex>

}


export default ShopItems