import useOneSignal from '../hooks/useOneSignal';
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {

  useOneSignal({
    appId: process.env.NEXT_PUBLIC_ONESIGNAL_APPID,
    notifyEnable: true,
    allowLocalhostAsSecureOrigin: true
  })

  return <Component {...pageProps} />;
}

export default MyApp;
