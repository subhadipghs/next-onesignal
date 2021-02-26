import styles from "../styles/home.module.css";

export default function Home() {
  const subscribe = () => {
    const ID = "500202202284802fasd40fj8f-faschange";
    if (window) {
      console.log("Running on browser");
      OneSignal.push(() => {
        console.log("SETTING");
        OneSignal.setExternalUserId(ID);
        console.log("SETTING DONE");
      });
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={subscribe}>
        One Signal 🔔
      </button>
    </div>
  );
}
