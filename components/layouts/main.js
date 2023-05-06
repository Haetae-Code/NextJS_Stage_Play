import Head from "next/head";
//import dynamic from "next/dynamic";
import { Box, Container,} from "@chakra-ui/react";
//import Header from "../Header";
const Main = ({ children, /*router*/ }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Stage Play" />
                <meta name="author" content="CWU CSE" />
                <title>Stage_Play</title>
            </Head>
            {/* <NavBar path={router.asPath} /> */}
            <Container>{children}</Container>
        </Box>
    );
};

export default Main;
