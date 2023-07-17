import {wrapper} from "../store/store";
import '../styles/main.min.css'
import {useEffect} from "react";

const App = ({Component, pageProps}) => {
  useEffect(() => {
    document.cookie = 'jwt=ksjdfhskjdhfskddkjh'
  }, [])
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
