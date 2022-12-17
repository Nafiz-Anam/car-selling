import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
import logo from "./logo.png";
import google from "./google.png";
import appstore from "./appstore.png";
import world from "./world.png";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
type Props = {};

// tabs / links
const Links = [
    {
        link: "E GIGANT.",
    },
    {
        link: "IMMO GIGANT.",
    },
    {
        link: "GASTRO GIGANT.",
    },
    {
        link: "HOSTING GIGANT.",
    },
    {
        link: "GIGANT SHOP.",
    },
];

const Footer = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* footer 1st section */}
                <div className={styles.footer_first_sec}>
                    <div className={styles.img_tabs}>
                        <div className={styles.img}>
                            <Image
                                src={logo}
                                width="252"
                                height={82}
                                alt="logo"
                            />
                            <p style={{ color: "white", fontSize: "13.3px" }}>
                                IS A COMPANY OF THE GIGANT GROUP
                            </p>
                        </div>

                        <div className={styles.line}></div>

                        <div className={styles.tabs}>
                            <ul className={styles.cardUl}>
                                <li
                                    style={{
                                        fontWeight: "bold",
                                        color: "white",
                                        fontSize: 16,
                                    }}
                                >
                                    GIGANT WORLD
                                </li>
                                {Links.map((list, index: number) => (
                                    <li
                                        className={styles.gigant_links}
                                        key={index}
                                    >
                                        <svg
                                            style={{ marginRight: "4px" }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="6"
                                            height="10.007"
                                            viewBox="0 0 6 10.007"
                                        >
                                            <path
                                                id="expand_more_FILL0_wght500_GRAD0_opsz48"
                                                d="M16.7,22.3l-5-5,1-1L16.7,20.327,20.71,16.32l1,1Z"
                                                transform="translate(-16.3 21.707) rotate(-90)"
                                                fill="#fff"
                                            />
                                        </svg>
                                        {list.link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.social_tabs}>
                        {/* app and google buttos */}
                        <div className={styles.storebtns}>
                            <p
                                style={{
                                    color: "white",
                                    marginBottom: "8px",
                                    fontSize: 16,
                                }}
                            >
                                Jetzt App kostenlos downloaden!
                            </p>
                            <div className={styles.btns}>
                                <Image
                                    src={google}
                                    width="120"
                                    height={40}
                                    alt="lo"
                                />
                                <Image
                                    src={appstore}
                                    width="120"
                                    height={40}
                                    alt="logo"
                                />
                            </div>
                        </div>

                        {/* social icons section */}
                        <div className={styles.social_icons}>
                            <h3
                                style={{
                                    color: "white",
                                    marginBottom: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                {" "}
                                <span style={{ color: "#FBB900" }}>
                                    {" "}
                                    EINFACH{" "}
                                </span>{" "}
                                GIGANTISCH.
                            </h3>
                            <div className={styles.social_links}>
                                {/* facebook */}
                                <BsFacebook className={styles.iconf} />
                                {/* instagram */}
                                <div className={styles.iconBg}>
                                    <BsInstagram className={styles.icon} />
                                </div>
                                {/* youtube */}
                                <div className={styles.iconBg}>
                                    <BsYoutube className={styles.icon} />
                                </div>
                                {/* tiktok */}
                                <div className={styles.iconBg}>
                                    <FaTiktok className={styles.icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* middle line */}
                <div className={styles.horizantLine}></div>
                {/* footer 2nd section */}

                <div className={styles.footer_last_section}>
                    <div className={styles.info}>
                        <div className={styles.firstLine}>
                            <p>
                                © 2023 AUTO GIGANT. | ALLE RECHTE VORBEHALTEN. |
                                COOKIE HINWEISE | DATENSCHUTZ |
                                NUTZUNGSBEDINGUNGEN | ÜBER UNS | IMPRESSUM |
                                KONTAKT
                            </p>
                            <p>
                                MADE WITH 💖 IN AUSTRIA | IN COOPERATION WITH
                                HGMEDIA ADVERTISING AGENCY.
                            </p>
                        </div>
                    </div>

                    <div className={styles.lang}>
                        <Image
                            src={world}
                            width={25}
                            height={25}
                            alt="worldpic"
                        />
                        <select
                            className={styles.select}
                            name="language"
                            id="language"
                        >
                            <option value="DEUTSCH">DEUTSCH</option>
                            <option value="RUMÄNISCH">RUMÄNISCH</option>
                            <option value="SERBISCH">SERBISCH</option>
                            <option value="TÜRKISCH">TÜRKISCH</option>
                            <option value="BOSNISCH">BOSNISCH</option>
                            <option value="KROATISCH">KROATISCH</option>
                            <option value="UNGARISCH">UNGARISCH</option>
                            <option value="POLNISCH">POLNISCH</option>
                            <option value="UKRAINISCH">UKRAINISCH</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
