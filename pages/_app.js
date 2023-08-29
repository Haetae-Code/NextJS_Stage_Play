import { AnimatePresence } from "framer-motion";
import Layout from "../components/layouts/layout";
import Chakra from "../components/chakra";
import Nav from "../components/NavBar";
import { Bottom } from "../components/Bottom";
import AuthProvider from '../components/AuthProvider';
import '../public/login_func/css/service-style.css';  // 글로벌 CSS 파일 경로
import { ChakraProvider } from "@chakra-ui/react";
import TopButton from '../components/TopButton';


// 스크롤 복구 설정을 비활성화
if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

const Website = ({ Component, pageProps, router }) => {
    const currentPath = router.pathname;
    const isWebsitePage = currentPath === '/Website';

    // '/Website' 경로에 대한 렌더링
    if (isWebsitePage) {
        return <Component {...pageProps} />;
    }

    // 기본 페이지 렌더링
    return (
        <Chakra cookies={pageProps.cookies}>
            <Nav />
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
                        <Component {...pageProps} key={router.route} />
                        <TopButton />
                        <Bottom />
                    </AnimatePresence>
                </Layout>
            </AuthProvider>
        </Chakra>
    );
};

export default Website;
