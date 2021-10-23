import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/Head';

import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { Header } from '../components/Header'
import {Sidebar} from '../components/Sidebar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Head>
          <title>
            SOS
          </title>
        </Head>
        <Header/>
            <Sidebar/>   
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>)
}

export default MyApp
