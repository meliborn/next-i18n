import { appWithTranslation } from 'next-i18next'
import Transition from '../components/Transition';
import { useRouter } from 'next/router';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Transition location={router.pathname}><Component {...pageProps} /></Transition>
}

export default appWithTranslation(MyApp)
