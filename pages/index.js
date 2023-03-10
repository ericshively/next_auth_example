import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login_button from "./login_button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className={styles.description}>Get started</p>

      <button onClick={handleButtonClick}> Get data </button>
      <Login_button />
    </div>
  );
}

const handleButtonClick = async () => {
  const response = await fetch("/api/data");
  const data = await response.json();
  console.log(data);
};
