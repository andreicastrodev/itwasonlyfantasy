// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { Router } from 'next/dist/client/router'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import Layout from '../component/layout/Layout';
import { useRouter } from 'next/router'
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {

  const route = useRouter();



  console.log(route)

  if (route.pathname === "/") {
    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp