import { Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"



const ShopItems = () => {

    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true)
    const onMouseLeave = () => setIsHovering(false)

    console.log(isHovering)
    return <Flex w="100%" justifyContent="space-evenly">
        <Flex onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} cursor="pointer" direction="column">
            <Box>
                {
                    isHovering ? <Image placeholder="blur" blurDataURL="/resources/shop/green-tee-2.webp" src="/resources/shop/green-tee-2.webp" width={306}
                        height={306} /> : <Image placeholder="blur" blurDataURL="/resources/shop/green-tee-1.webp" src="/resources/shop/green-tee-1.webp" width={306}
                            height={306} />
                }
            </Box>
            <Box>
                <Text>
                    fantasy tee green
                </Text>
                <Text color="gray">$30.00</Text>
            </Box>
        </Flex>
    </Flex>

}


export default ShopItems