import { Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Header from '../Header'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
  const t = `${title} - Stage Play`
  return (
    <Container>
    <Header></Header>
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 1.7, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            {/* <meta name="twitter:title" content={t} /> */}
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}

        {/* <GridItemStyle /> */}
      </>
    </motion.article>
    </Container>
  )
}

export default Layout