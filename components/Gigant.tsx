import React from "react";
import styles from "../styles/Gigant.module.css";
import {
    AUDI,
    BMW,
    FORD,
    Mercedes,
    VW,
    Aufbautypen,
    MARKEN,
    MARKEN_ASIEN,
    Autohäuser,
    GIGANT_WORLD,
} from "../Data";
import { Roboto } from "@next/font/google";

const Gigant = () => {
    return (
        <>
            {/* first part  */}
            <div
                style={{
                    backgroundColor: "#fff",
                    padding: " 0 30px 0 30px",
                }}
            >
                <div>
                    <p
                        style={{
                            color: "#6C757D",
                            fontSize: "20px",
                            textAlign: "center",
                            paddingTop: "17px",
                            paddingBottom: "17px",
                        }}
                    >
                        Wir bieten eine große Auswahl an beliebten Modellen,
                        Marken und Autohäusern.
                    </p>
                </div>

                <div className={styles.car_types}>
                    {/* AUDI TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>Audi</li>
                        {AUDI.map((list, index: number) => (
                            <li key={index}>{list.audi}</li>
                        ))}
                    </ul>

                    {/* BMW TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>BMW</li>
                        {BMW.map((list, index: number) => (
                            <li key={index}>{list.BMW}</li>
                        ))}
                    </ul>

                    {/* Mercedes-Benz TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>Mercedes-Benz</li>
                        {Mercedes.map((list, index: number) => (
                            <li key={index}>{list.Mercedes}</li>
                        ))}
                    </ul>

                    {/* VW TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>VW</li>
                        {VW.map((list, index: number) => (
                            <li key={index}>{list.VW}</li>
                        ))}
                    </ul>

                    {/* FORD TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>Ford</li>
                        {FORD.map((list, index: number) => (
                            <li key={index}>{list.Ford}</li>
                        ))}
                    </ul>

                    {/* Aufbautypen TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>Aufbautypen</li>
                        {Aufbautypen.map((list, index: number) => (
                            <li key={index}>{list.auf}</li>
                        ))}
                    </ul>
                    {/* Marken Europa TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>Marken Europa</li>
                        {MARKEN.map((list, index) => (
                            <li key={index}>{list.marken}</li>
                        ))}
                    </ul>
                    {/* Marken Asien TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>Marken Asien</li>
                        {MARKEN_ASIEN.map((list, index: number) => (
                            <li key={index}>{list.asien}</li>
                        ))}
                    </ul>
                    {/* Autohäuser TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>Autohäuser</li>
                        {Autohäuser.map((list, index: number) => (
                            <li key={index}>{list.auto}</li>
                        ))}
                    </ul>

                    {/* GIGANT WORLD TYPES */}
                    <ul className={styles.cars}>
                        <li className={styles.listHead}>FGIGANT WORLD</li>
                        {GIGANT_WORLD.map((list, index: number) => (
                            <li key={index}>{list.gigant}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* second part  */}
            <div
                style={{
                    backgroundColor: "#fff",
                    padding: " 0 30px 30px 30px",
                }}
            >
                <div>
                    <p
                        style={{
                            color: "#6C757D",
                            fontSize: "20px",
                            textAlign: "center",
                            paddingTop: "17px",
                            paddingBottom: "17px",
                        }}
                    >
                        Autogigant.at wird bald auch in Deutschland, der
                        Schweiz, Türkiye und Qatar verfügbar sein.
                    </p>
                </div>

                {/* news latter */}
                <div
                    style={{
                        backgroundColor: "#f1f2f3",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        paddingTop: "20px",
                        paddingBottom: "30px",
                        textAlign: "center",
                    }}
                >
                    <div style={{}}>
                        <h2
                            style={{
                                color: "#6C757D",
                                fontSize: 30,
                            }}
                        >
                            GIGANT WORLD - aktuell. gigantisch. kostenlos.
                        </h2>
                        <p style={{ color: "#6C757D", fontSize: 20 }}>
                            Newsletter abonnieren, immer informiert bleiben und
                            € 50,- GIGA COINS gewinnen!*
                        </p>

                        <div className={styles.newspaper}>
                            <input
                                className={styles.input}
                                style={{
                                    paddingLeft: "15px",
                                    paddingRight: "15px",
                                }}
                                type="text"
                                placeholder="Deine E-Mail Adresse"
                            />
                            <button className={styles.submit}>
                                Newsletter Anmelden
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gigant;
