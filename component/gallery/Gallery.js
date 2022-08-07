import { Grid, GridItem, Box } from "@chakra-ui/react";
import Image from "next/image"

const Gallery = () => {
    return <Grid overflow="hidden" templateRows='repeat(40, 5vw)'
        templateColumns='repeat(8, 1fr)'>
        <GridItem gridColumn="1 / span 4">
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-1.webp" src="/resources/gallery/gal-1.webp" width={578} height={354}
            />
        </GridItem>
        <GridItem gridColumn="5 / span 4" >
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-2.webp" src="/resources/gallery/gal-2.webp" width={578}
                height={354} />
        </GridItem>
        <GridItem gridColumn="1 / span 4" gridRow="5">
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-3.webp" src="/resources/gallery/gal-3.webp" width={578} height={578}
            />
        </GridItem>
        <GridItem gridColumn="5 / span 4" gridRow="5">
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-4.webp" src="/resources/gallery/gal-4.webp" width={578}
                height={578} />
        </GridItem>
        <GridItem gridColumn="1 /  span 5" gridRow="11" zIndex="1">
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-5.webp" src="/resources/gallery/gal-5.webp" width={578} height={362}
            />
        </GridItem>
        <GridItem gridColumn="5 / span 4" gridRow="11">
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-6.webp" src="/resources/gallery/gal-6.webp" width={578}
                height={520} />
        </GridItem>
        <GridItem gridColumn="1 /  span 8" gridRow="16" zIndex="1">
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-7.webp" src="/resources/gallery/gal-7.webp" width={600} height={354}
            />
        </GridItem>
        <GridItem gridColumn="6 / span 4" gridRow="16">
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-9.webp" src="/resources/gallery/gal-9.webp" width={578}
                height={578} />
        </GridItem>
        <GridItem gridColumn="1 / span 4" gridRow="21" zIndex="3" >
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-10.webp" src="/resources/gallery/gal-10.webp" width={578}
                height={578} />
        </GridItem>
        <GridItem gridColumn="5 / span 4" gridRow="21" zIndex="3" >
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-11.webp" src="/resources/gallery/gal-11.webp" width={578} height={578}
            />
        </GridItem>
        <GridItem gridColumn="1 / span 4" gridRow="27"  >
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-16.webp" src="/resources/gallery/gal-16.webp" width={575}
                height={575} />
        </GridItem>
        <GridItem gridColumn="5 / span 6" gridRow="27" zIndex="2"  >
            <Image placeholder="blur" blurDataURL="/resources/gallery/gal-17.webp" src="/resources/gallery/gal-17.webp" width={600} height={574}
            />
        </GridItem>
        <GridItem gridColumn="1 / span 10" gridRow="33" zIndex="2"  >
            <Box>
                <Image placeholder="blur" blurDataURL="/resources/gallery/gal-20.jpg" src="/resources/gallery/gal-20.jpg" width={1080} height={677}
                />
            </Box>

        </GridItem>
    </Grid >
}


export default Gallery;
