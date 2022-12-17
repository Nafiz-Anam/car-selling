import React, { useState } from "react";
import front_pic from "../public/assets/front_pic.png";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
// car icons
import limous from "../public/assets/car icons/limous.png";
import suv from "../public/assets/car icons/suv.png";
import kombi from "../public/assets/car icons/kombi.png";
import coupe from "../public/assets/car icons/coupe.png";
import cabro from "../public/assets/car icons/cabro.png";
import klein from "../public/assets/car icons/klein.png";
// -----------
import input1 from "../public/assets/input groups icons/inputicon1.png";

const carIcons = [
    {
        img: limous,
        width: "88.383",
        height: "54.827",
    },
    {
        img: suv,
        width: "88.383",
        height: "54.827",
    },
    ,
    {
        img: kombi,
        width: "88.383",
        height: "54.827",
    },
    {
        img: coupe,
        width: "88.383",
        height: "54.827",
    },
    {
        img: cabro,
        width: "88.383",
        height: "54.827",
    },
    {
        img: klein,
        width: "88.383",
        height: "54.827",
    },
];

// ---------- Select and option lists ------------------------
const km = [
    {
        value: "km1",
    },
    {
        value: "km2",
    },
    {
        value: "km3",
    },
    {
        value: "km4",
    },
    {
        value: "km5",
    },
];

const EM = [
    {
        value: "EM1",
    },
    {
        value: "EM2",
    },
    {
        value: "EM3",
    },
    {
        value: "EM4",
    },
    {
        value: "EM5",
    },
];

const symbol = [
    {
        value: "€ 1",
    },
    {
        value: "€ 2",
    },
    {
        value: "€ 3",
    },
    {
        value: "€ 4",
    },
    {
        value: "€ 5",
    },
];

const Hero = () => {
    const [KMvalue, setKMvalue] = useState("abc");
    const [symbolvalue, setsymbolvalue] = useState("bis");
    const [EMvalue, setEMvalue] = useState("xyz");

    const [KMclick, setKMclick] = useState(false);
    const [EMclick, setEMclick] = useState(false);
    const [symbolclick, setsymbolclick] = useState(false);

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className={styles.container}>
                <Image src={front_pic} className={styles.img} alt="front-pic" />
                {/* <div className={styles.wrapper}> */}

                {/* left lists */}
                <div className={styles.right}>
                    {/* car icons lists */}

                    <div className="caricons">
                        <ul className={styles.lists}>
                            {carIcons.map((item, index) => (
                                <li key={index} className={styles.list}>
                                    <Image
                                        src={item?.img}
                                        alt="icons"
                                        width="88.383"
                                        height={54.827}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --------- button lists --------- */}
                    <div className={styles.first}>
                        <div className={styles.firstgp}>
                            <input type="text" placeholder="Makes" />
                            <span>
                                <Image src={input1} alt="icons" />
                            </span>
                        </div>

                        <div className={styles.firstgp}>
                            <input type="text" placeholder="Modell" />
                            <span>
                                <Image src={input1} alt="icons" />
                            </span>
                        </div>

                        <div className={styles.firstgp}>
                            <input type="text" placeholder="Suchbegriff" />
                            <span className={styles.btn}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        id="search_FILL0_wght500_GRAD0_opsz48"
                                        d="M24.334,25.75l-7.24-7.223a5.771,5.771,0,0,1-1.885,1.067,6.971,6.971,0,0,1-2.322.383A6.952,6.952,0,0,1,7.79,17.9,6.839,6.839,0,0,1,5.7,12.864,6.839,6.839,0,0,1,7.79,7.829,6.888,6.888,0,0,1,12.831,5.75a6.843,6.843,0,0,1,5.027,2.079,6.862,6.862,0,0,1,2.077,5.034,6.833,6.833,0,0,1-.383,2.271,7.289,7.289,0,0,1-1.12,2.052l7.268,7.2ZM12.858,18.117a4.957,4.957,0,0,0,3.675-1.546,5.106,5.106,0,0,0,1.516-3.707,5.106,5.106,0,0,0-1.516-3.707A4.957,4.957,0,0,0,12.858,7.61a5.251,5.251,0,0,0-5.273,5.253,5.251,5.251,0,0,0,5.273,5.253Z"
                                        transform="translate(-5.7 -5.75)"
                                        fill="#fff"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className={styles.first}>
                        <div className={styles.option_btn_wrapper}>
                            <div className={styles.second}>
                                <span className={styles.leftbtn}>km</span>
                                <div className={styles.selected}>{KMvalue}</div>
                                <span
                                    onClick={(e) => setKMclick(!KMclick)}
                                    className={styles.rightbtn}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16.678"
                                        height="10"
                                        viewBox="0 0 16.678 10"
                                    >
                                        <path
                                            id="expand_more_FILL0_wght500_GRAD0_opsz48"
                                            d="M20.039,26.3,11.7,17.961,13.361,16.3l6.678,6.712,6.678-6.678,1.661,1.661Z"
                                            transform="translate(-11.7 -16.3)"
                                            fill="#fff"
                                        />
                                    </svg>
                                </span>
                            </div>

                            {KMclick ? (
                                <ul className={styles.optonList}>
                                    {km.map((option, index) => (
                                        <li
                                            key={index}
                                            onClick={(e) => {
                                                setKMvalue(option.value);
                                                setKMclick(!KMclick);
                                            }}
                                            value={option.value}
                                        >
                                            {option.value}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>

                        <div className={styles.option_btn_wrapper}>
                            <div className={styles.second}>
                                <span className={styles.leftbtn}>EM</span>
                                <div className={styles.selected}>{EMvalue}</div>
                                <span
                                    onClick={(e) => setEMclick(!EMclick)}
                                    className={styles.rightbtn}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16.678"
                                        height="10"
                                        viewBox="0 0 16.678 10"
                                    >
                                        <path
                                            id="expand_more_FILL0_wght500_GRAD0_opsz48"
                                            d="M20.039,26.3,11.7,17.961,13.361,16.3l6.678,6.712,6.678-6.678,1.661,1.661Z"
                                            transform="translate(-11.7 -16.3)"
                                            fill="#fff"
                                        />
                                    </svg>
                                </span>
                            </div>

                            {EMclick ? (
                                <ul className={styles.optonList}>
                                    {EM.map((option, index) => (
                                        <li
                                            key={index}
                                            onClick={(e) => {
                                                setEMvalue(option.value);
                                                setEMclick(!EMclick);
                                            }}
                                            value={option.value}
                                        >
                                            {option.value}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>

                        <div className={styles.option_btn_wrapper}>
                            <div className={styles.second}>
                                <span className={styles.leftbtn}>€</span>
                                <div className={styles.selected}>
                                    {symbolvalue}
                                </div>
                                <span
                                    onClick={(e) =>
                                        setsymbolclick(!symbolclick)
                                    }
                                    className={styles.rightbtn}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16.678"
                                        height="10"
                                        viewBox="0 0 16.678 10"
                                    >
                                        <path
                                            id="expand_more_FILL0_wght500_GRAD0_opsz48"
                                            d="M20.039,26.3,11.7,17.961,13.361,16.3l6.678,6.712,6.678-6.678,1.661,1.661Z"
                                            transform="translate(-11.7 -16.3)"
                                            fill="#fff"
                                        />
                                    </svg>
                                </span>
                            </div>

                            {symbolclick ? (
                                <ul className={styles.optonList}>
                                    {symbol.map((option, index) => (
                                        <li
                                            key={index}
                                            onClick={(e) => {
                                                setsymbolvalue(option.value);
                                                setsymbolclick(!symbolclick);
                                            }}
                                            value={option.value}
                                        >
                                            {option.value}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    <div className={styles.filter}>
                        <p>
                            <a className={styles.btnh} href="#">
                                Erweiterte Suche
                            </a>{" "}
                            |{" "}
                            <a className={styles.btnh} href="#">
                                Filter zurücksetzen
                            </a>
                        </p>
                    </div>

                    {/* last section in right side */}

                    <div className={styles.lastsection}>
                        <div className={styles.last_first}>
                            <input
                                type="checkbox"
                                id="checked"
                                name="checked"
                                style={{
                                    cursor: "pointer",
                                    height: 30,
                                    weight: 30,
                                }}
                                value={isChecked}
                                checked={isChecked}
                                onChange={handleOnChange}
                            />
                            <p style={{ paddingLeft: 5 }}>
                                nur Neu- und Jungwagen
                            </p>
                        </div>

                        <div className={styles.last}>
                            <h3>21.1585 Fahrzeuge anzeigen</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* dropdown 1 */}
            
            {/* dropdown 1 */}
        </>
    );
};

export default Hero;
