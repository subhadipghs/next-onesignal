import { useEffect } from "react";

function useOneSignal({ appId, notifyEnable, allowLocalhostAsSecureOrigin }) {
  useEffect(() => {

    if (window !== "undefined") {
      window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      console.log('init');
      OneSignal.init({
        appId,
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin,
      });
      console.log('init end');
    })
    }
  }, []);
}


export default useOneSignal;
