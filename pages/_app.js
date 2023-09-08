import { wrapper } from '../store/store'

import '../styles/main.min.css'

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
