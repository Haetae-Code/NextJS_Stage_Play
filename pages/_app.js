import { AnimatePresence } from 'framer-motion'
import { Box, Container, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/layout'
import Chakra from '../components/chakra'
import Header from '../components/Header'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }
const Website = ({Component, pageProps, router }) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Flex>
            <Header></Header>
                <Layout router={router}>
                    <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={()=> {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({top:0})
                        }
                    }}>
                        <Component {...pageProps} key={router.route}></Component>
                    </AnimatePresence>
                </Layout>
            </Flex>
        </Chakra>
    )
}
export default Website