import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import Card from "./cards/Card";
import styles from "../styles/Cards.module.css";

let productsp = [
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
];
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const Slider = () => {
    const [showmore, setshowmore] = useState(false);

    const options = {
        // margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 500,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    };

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
                />
            </Head>

            <div className={styles.slider_container}>
                <div className={styles.cart_slide}>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={4}
                        nav={true}
                        navText={[
                            '<img src="/images/Arrow_left.png" />',
                            '<img src="/images/Arrow_right.png" />',
                        ]}
                        dots={false}
                        animateIn={true}
                        {...options}
                    >
                        {productsp && productsp.length > 0
                            ? productsp.map((product) => {
                                  return (
                                      <>
                                          <Card />
                                      </>
                                  );
                              })
                            : ""}
                    </OwlCarousel>
                </div>

                <div className={styles.cart_slide}>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={4}
                        nav={true}
                        navText={[
                            '<img src="/images/Arrow_left.png" />',
                            '<img src="/images/Arrow_right.png" />',
                        ]}
                        dots={false}
                        animateIn={true}
                        {...options}
                    >
                        {productsp && productsp.length > 0
                            ? productsp.map((product) => {
                                  return (
                                      <>
                                          <Card />
                                      </>
                                  );
                              })
                            : ""}
                    </OwlCarousel>
                </div>

                {showmore ? (
                    <div className={styles.cart_slide}>
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={4}
                            nav={true}
                            navText={[
                                '<img src="/images/Arrow_left.png" />',
                                '<img src="/images/Arrow_right.png" />',
                            ]}
                            dots={false}
                            animateIn={true}
                            {...options}
                        >
                            {productsp && productsp.length > 0
                                ? productsp.map((product) => {
                                      return (
                                          <>
                                              <Card />
                                          </>
                                      );
                                  })
                                : ""}
                        </OwlCarousel>
                    </div>
                ) : (
                    ""
                )}

                {/* {showmore ? (
                    <div className={styles.cart_slide}>
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={4}
                            nav={true}
                            navText={[
                                '<img src="/images/Arrow_left.png" />',
                                '<img src="/images/Arrow_right.png" />',
                            ]}
                            dots={false}
                            animateIn={true}
                            {...options}
                        >
                            {productsp && productsp.length > 0
                                ? productsp.map((product) => {
                                      return (
                                          <>
                                              <Card />
                                          </>
                                      );
                                  })
                                : ""}
                        </OwlCarousel>
                    </div>
                ) : (
                    ""
                )} */}

                {showmore ? (
                    ""
                ) : (
                    <div className={styles.slider_accordian}>
                        <div
                            className={styles.btn}
                            onClick={(e) => setshowmore(!showmore)}
                        >
                            <span className={styles.btnName}>
                                {!showmore ? <span>+</span> : ""} Weitere
                                Fahrzeuge
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
export default Slider;
