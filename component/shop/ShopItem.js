import { Box, Button, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import ShopModal from "../ui/ShopModal";


const ShopItem = ({ title, price, images, id }) => {

    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true)
    const onMouseLeave = () => setIsHovering(false)


    const onHoverJSX = (
        <>
            <ShopModal itemId={id} />
            <Image placeholder="blur" blurDataURL={images.image2} src={images.image2} width={306}
                height={306} />
        </>



    )
    return <Flex onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} cursor="pointer" direction="column">
        <Box position="relative">
            {
                isHovering ? onHoverJSX : <Image placeholder="blur" blurDataURL={images.image1} src={images.image1} width={306}
                    height={306} />
            }
        </Box>
        <Box>
            <Text>
                {title}
            </Text>
            <Text color="gray">${price.toFixed(2)}</Text>
        </Box>
    </Flex>
}


export default ShopItem