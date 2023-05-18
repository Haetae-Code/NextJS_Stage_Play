import { AnimatePresence } from "framer-motion";
//import { Box, Container, Flex } from "@chakra-ui/react";
import Layout from "../components/layouts/layout";
import Chakra from "../components/chakra";
//import Header from "../components/Header";
import Nav from "../components/NavBar";
import { Bottom } from "../components/Bottom";
if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}
const Website = ({ Component, pageProps, router }) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            {/* <Header></Header> */}
            <Nav></Nav>
            <Layout router={router}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== "undefined") {
                            window.scrollTo({ top: 0 });
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route}></Component>
                    <Bottom></Bottom>
                </AnimatePresence>
            </Layout>
        </Chakra>
    );
};
export default Website;
