import type { AppProps } from 'next/app'
import { AppProvider } from '../components/views/AppProvider'
import { useDb } from '../utils/db'
import { store, useStore } from '../utils/store'

export default function MyApp({ Component, pageProps }: AppProps) {
    useStore()
    useDb()

    console.log(`store()`, store())

    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    )
}
