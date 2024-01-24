'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const baseTheme = extendTheme({
    colors: {
        main: {
            100: '#14191e'
        }
    }
})


export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>
}