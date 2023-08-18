import type { AppProps } from '../../node_modules/next/app'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
