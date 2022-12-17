import React from "react";
import Slider from "react-slick";
import Card from "./cards/Card";

let tableData = [
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 2,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 3,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    {
        id: 4,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
    },
    // {
    //     id: 5,
    //     name: "Product Number 1",
    //     brand: "Brand Name",
    //     url: "products-number-1",
    //     price: 100,
    // },
    // {
    //     id: 6,
    //     name: "Product Number 1",
    //     brand: "Brand Name",
    //     url: "products-number-1",
    //     price: 100,
    // },
    // {
    //     id: 7,
    //     name: "Product Number 1",
    //     brand: "Brand Name",
    //     url: "products-number-1",
    //     price: 100,
    // },
    // {
    //     id: 8,
    //     name: "Product Number 1",
    //     brand: "Brand Name",
    //     url: "products-number-1",
    //     price: 100,
    // },
    // {
    //     id: 9,
    //     name: "Product Number 1",
    //     brand: "Brand Name",
    //     url: "products-number-1",
    //     price: 100,
    // },
    // {
    //     id: 10,
    //     name: "Product Number 1",
    //     brand: "Brand Name",
    //     url: "products-number-1",
    //     price: 100,
    // },
];

const SliderSec = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.8,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <section className=" py-6">
            <Slider {...settings}>
                {tableData.map((item) => {
                    return <Card key={item.id} />;
                })}
            </Slider>
        </section>
    );
};

export default SliderSec;
