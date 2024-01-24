'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const baseTheme = extendTheme({
    colors: {
        
    }
})


export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>
}