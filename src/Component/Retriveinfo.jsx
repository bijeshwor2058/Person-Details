import React, { useState, useEffect } from "react";
import styles from "./retriveinfo.module.css";

const Retriveinfo = () => {
  const [personDetails, setPersonDetails] = useState(null);

  const personData = localStorage.getItem("showDetails");
  console.log(JSON.parse(personData));

  const personDataCopy = JSON.parse(personData);

    // setPersonDetails(JSON.parse(personDataCopy));


  const showPersonDetail = () => {
    const aadharNumber = document.getElementById("aadhar").value;
  };

  return (
    <div className={styles.retrive_container}>
      <h4
        style={{
          width: "20%",
          border: "1px solid black",
        }}
      >
        Retrieve Information
      </h4>

      <div className={styles.detailsfind}>
        <input id="aadhar" type="number" placeholder="Enter your Aadhar" />
        <button onClick={showPersonDetail}>Find</button>
      </div>

      <div className={styles.person_details} >


      </div>
    </div>
  );
};

export default Retriveinfo;
