import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    const bgColor = useColorModeValue("light", "black")

    return (
        <Box backgroundColor={bgColor} w="100%">
            <Header />
            <Box>
                {props.children}
            </Box>
            <Footer />
        </Box>
    )
}


export default Layout;