import Head from 'next/head'
import { wrapper } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'
import { persistStore } from 'redux-persist'
import '../styles/global.less'

const MyApp = ({ Component, pageProps }) => {
  const store = useStore()

  const __persistor = persistStore(store)

  return (
    <>
      <Head>
        <title>Sovrakofanela.gr</title>
        <link rel="icon" href="/fav.jpg" />
      </Head>

      {/* <PersistGate loading={null} persistor={persistor}> */}
      <PersistGate persistor={__persistor} loading={<div>Loading</div>}>
        <Component {...pageProps} />
      </PersistGate>
      {/* </PersistGate> */}
    </>
  )
}

export default wrapper.withRedux(MyApp)
