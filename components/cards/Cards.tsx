import React, { useState } from "react";
import styles from "../../styles/Cards.module.css";
import Card from "./Card";

const Cards = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className={styles.container}>
    
  
        <Card/> 
        <Card/>  
        <Card/>  
      

      </div>
    </>
  );
};

export default Cards;
