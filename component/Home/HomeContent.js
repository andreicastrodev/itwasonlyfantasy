import { Grid, GridItem, Box } from "@chakra-ui/react";
import Image from "next/image"
import { IMG_ARR } from "../../utils/homeImagesArr";

const HomeContent = () => {
    return <Grid overflow="hidden" templateRows='repeat(3, 30rem)'
        templateColumns='repeat(2, 30rem)'>
        {IMG_ARR.map(item => {
            return <GridItem overflow="hidden" >
                <Box overflow="hidden" _hover={{
                    transform: "scale(1.1)",
                    transition: "all 1s ease",
                }}>
                    <Image placeholder="blur" blurDataURL={item} src={item} width={600}
                        height={600} />
                </Box>

            </GridItem>
        })}
    </Grid >
}


export default HomeContent;