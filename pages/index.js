import React from "react";
import styles from "../styles/home.module.css";
import { v4 } from "uuid";

export default function Home() {
  const [id, setId] = React.useState("");
  const subscribe = () => {
    const ID = v4();
    setId(ID);
    if (window) {
      console.log("Running on browser");
      OneSignal.push(() => {
        console.log("Setting external id ", ID);
        OneSignal.setExternalUserId(ID);
      });
    }
  };

  return (
    <div className={styles.center}>
      <button className={styles.button} onClick={subscribe}>
        Set yourself in Onesignal
      </button>
      <p>Your external id: {id}</p>
    </div>
  );
}
