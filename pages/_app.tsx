import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Header/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/HeaderMain/Header";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            {/* <Header /> */}
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Component {...pageProps} />
                </div>
            </div>
            <Footer />

            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script> */}
        </>
    );
}
