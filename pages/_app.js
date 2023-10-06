import { AnimatePresence } from "framer-motion";
import Layout from "../components/layouts/layout";
import Chakra from "../components/chakra";
import Nav from "../components/NavBar";
import Nav_MOB from "../components/Navbar_mobile";
import { Bottom } from "../components/Bottom";
import AuthProvider from '../components/AuthProvider';
import TopButton from '../components/TopButton';
import '../public/login_func/css/service-style.css'; // 글로벌 CSS 파일 경로
import {useMediaQuery } from "@chakra-ui/react";

if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

const Website = ({ Component, pageProps, router }) => {
    const [isMobile] = useMediaQuery("(max-width: 795px)");
    const currentpath = router.pathname;
    const isCreditPage = currentpath === '/Website';
    if (router.pathname ==='/Website'){
        return(
            <Component {...pageProps}/>
        )
    }

    function Website({ Component, pageProps }) {
        return (
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        );
      }

    //원래 본문
    return (
        <Chakra cookies={pageProps.cookies}>
            {/* <Header></Header> */}
            { isMobile ? (null):(<Nav/>)}
            <AuthProvider>
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
                    <TopButton/>
                    <Bottom></Bottom>
                </AnimatePresence>
            </Layout>
            </AuthProvider>
        </Chakra>
    );
};
export default Website;