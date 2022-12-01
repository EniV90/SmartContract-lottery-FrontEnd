import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance  from "../components/LotteryEntrance"


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Eni's Lottery System</title>
                <meta
                    name="description"
                    content="Decentralized lottery system"
                />
                <link rel="icon" href="/favicon.ico" />
        </Head>
            {/* <ManualHeader /> */}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
