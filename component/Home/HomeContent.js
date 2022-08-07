import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image"
import { IMG_ARR } from "../../utils/homeImagesArr";

const HomeContent = () => {
    return <Grid templateRows='repeat(3, 30rem)'
        templateColumns='repeat(2, 30rem)'>
        {IMG_ARR.map(item => {
            return <GridItem>
                <Image placeholder="blur" blurDataURL={item} src={item} width={600}
                    height={600} />
            </GridItem>
        })}
    </Grid>
}


export default HomeContent;