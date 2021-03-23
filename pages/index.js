import styles from "../styles/home.module.css";

export default function Home() {
  const subscribe = () => {
    const ID = "someuser_id";
    if (window) {
      console.log("Running on browser");
      OneSignal.push(() => {
        console.log(ID);
        OneSignal.setExternalUserId(ID);
      });
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={subscribe}>
        Say yes to Onesignal
      </button>
    </div>
  );
}
