import React from "react";
import styles from "./Secondlast.module.css";
import { HÄNDLERBEREICH, KOOPERATIONEN, NÜTZLICHES } from "../../Data";
import Image from "next/image";
import imgicon from "./imgicon.png";

const SecondLast = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <ul className={styles.cardUl}>
                        <li
                            style={{ fontWeight: "bold", color: "#6C757D" }}
                            className={styles.head}
                        >
                            HÄNDLERBEREICH
                        </li>
                        {/* <hr style={{ color: "#DFDFDF" }} /> */}
                        <div className={styles.line}></div>
                        {HÄNDLERBEREICH.map((list, index: number) => (
                            <li key={index}>{list.handle}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.card}>
                    <ul className={styles.cardUl}>
                        <li
                            style={{ color: "#6C757D", fontWeight: "bold" }}
                            className={styles.head}
                        >
                            KOOPERATIONEN
                        </li>
                        <div className={styles.line}></div>
                        {KOOPERATIONEN.map((list, index: number) => (
                            <li key={index}>{list.kooper}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.card}>
                    <ul className={styles.cardUl}>
                        <li
                            style={{ fontWeight: "bold", color: "#6C757D" }}
                            className={styles.head}
                        >
                            NÜTZLICHES
                        </li>
                        <div className={styles.line}></div>
                        {NÜTZLICHES.map((list, index: number) => (
                            <li key={index}>{list.NUTZ}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.picSlidder}>
                <Image src={imgicon} alt="img icon" width="100" height="120" />
            </div>
        </div>
    );
};

export default SecondLast;
