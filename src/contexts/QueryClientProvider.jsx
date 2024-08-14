import React, {useState} from "react"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

export default function ReactQueryProvider({children}) {
    const [queryClient] = useState(
        new QueryClient({
            defaultOptions: {
                queries:{
                    staleTime: Infinity
                }
            }
        })
    )

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}