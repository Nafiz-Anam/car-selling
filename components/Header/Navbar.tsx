import Image from 'next/image'
import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../public/assets/logo.png'

import { AiOutlineSearch, AiOutlineNotification } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg'

const Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>

                    <Image src={logo} className={styles.img} alt="logo" />

                    <ul className={styles.lists}>
                        <li className={styles.list}>

                            <div className={styles.circle}>
                                <input type="text" placeholder='text here...' className={styles.searchbox} />
                                <AiOutlineSearch className={styles.icon} />
                            </div>

                        </li>

                        <li className={styles.list}>
                            <div className={styles.circle}>
                                <IoMdNotificationsOutline className={styles.icon} />
                            </div>
                        </li>


                        <li className={styles.list}>
                            <BsHeart style={{ fontSize: "30px", marginTop: "7px" }} className={styles.icon} />
                        </li>
                    </ul>

                    <div className={styles.prfle}>
                        <CgProfile className={styles.prflicon} />

                        {/* navigation bar */}
                        {/* <div className={styles.account_sec}>
                        <ul>
                            <li>someting</li>
                            <li>someting</li>
                            <li>someting</li>
                            <li>someting</li>
                            <li>someting</li>
                            <li>someting</li>
                            <li>someting</li>
                            <li>someting</li>
                            <li>someting</li>
                            <li>someting</li>
                            <li>someting</li>
                        </ul>
                        </div> */}
                    </div>

                </div>

                {/* --------------------------------------------------------------------------------------------------------- */}

                {/* responsive header */}
                {/* <div className={styles.mblnav}>

                <div className={styles.searchbox}>
                    <div className={styles.searchicon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <path id="search_FILL0_wght500_GRAD0_opsz48" d="M19.675,20.75l-5.43-5.417a4.328,4.328,0,0,1-1.414.8,5.228,5.228,0,0,1-1.742.287,5.214,5.214,0,0,1-3.822-1.56A5.129,5.129,0,0,1,5.7,11.085,5.129,5.129,0,0,1,7.268,7.31a5.166,5.166,0,0,1,3.781-1.56,5.132,5.132,0,0,1,3.77,1.56,5.31,5.31,0,0,1,1.27,5.479,5.467,5.467,0,0,1-.84,1.539l5.451,5.4Zm-8.607-5.725a3.718,3.718,0,0,0,2.756-1.159,3.829,3.829,0,0,0,1.137-2.78A3.83,3.83,0,0,0,13.825,8.3a3.718,3.718,0,0,0-2.756-1.159,3.938,3.938,0,0,0-3.955,3.94,3.938,3.938,0,0,0,3.955,3.94Z" transform="translate(-5.7 -5.75)" fill="#fff" />
                        </svg>
                    </div>
                    <input type="text" />
                    <div className={styles.search}>
                        <p>search</p>
                    </div>
                </div>
                </div> */}


            </div>

        </>
    )
}

export default Navbar