import { AnimatePresence } from "framer-motion";
//import { Box, Container, Flex } from "@chakra-ui/react";
import Layout from "../components/layouts/layout";
import Chakra from "../components/chakra";
//import Header from "../components/Header";
import Nav from "../components/NavBar";
import { Bottom } from "../components/Bottom";
import AuthProvider from '../components/AuthProvider';
import { AuthContext } from '../components/AuthProvider';
//import "../public/login_func/css/service-style.css"; //service에서의 탑 버튼 만들기


if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}
const Website = ({ Component, pageProps, router }) => {
    // const authContext = useContext(AuthContext);
    // const isLoggedIn = authContext?.isLoggedIn;
    // const currentPath = router.pathname;
    // const isLoginPage = currentPath === '/login';
    // if (router.pathname === '/login') {
    //     return (
    //             <AuthProvider>
    //                 <Component {...pageProps} />
    //             </AuthProvider>
    //     )
    // }

    // useEffect(() => {
    //     if (!isLoggedIn && !isLoginPage) {
    //       router.push('/login');
    //     }
    //   }, [isLoggedIn, isLoginPage, router]);

    return (
        <Chakra cookies={pageProps.cookies}>
            {/* <Header></Header> */}
            <Nav></Nav>
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
                    <Bottom></Bottom>
                </AnimatePresence>
            </Layout>
            </AuthProvider>
        </Chakra>
    );
};
export default Website;
