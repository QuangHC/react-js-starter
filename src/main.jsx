import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '~/index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChakraProvider} from "@chakra-ui/react";
import themes from "~/themes/index.js";
import App from "~/App.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={themes}>
                <App/>
            </ChakraProvider>
        </QueryClientProvider>
    </StrictMode>,
)
