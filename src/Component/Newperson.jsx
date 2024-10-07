import styles from "./newperson.module.css";
import { useState,useEffect } from "react";
const Newperson = () => {
  const [showElement, setShowElement] = useState(false);
  const [showDetails, setShowDetails] = useState([]);

    useEffect(() => {
      const data =   localStorage.getItem('showDetails')
      if(data){
      setShowDetails(JSON.parse(data));
      }
    },[])

  const addPerson = () => {
    setShowElement(!showElement);
  };

  const saveData = (e) => {
    e.preventDefault();
    const obj = [{
        name: document.getElementById("name").value,
        dob:document.getElementById("dob").value,
        aadhar: document.getElementById("aadhar").value,
        mobile: document.getElementById("mobile").value,
        age: document.getElementById("age").value,
      }]
    setShowDetails([...showDetails,...obj]);
    setShowElement("")
    localStorage.setItem("showDetails", JSON.stringify(obj))
  }

  return (
    <div className={styles.container}>
      <h4
        style={{
          width: "20%",
          border: "1px solid black",
        }}
      >
        Add New Person
      </h4>

      <table
        style={{
          border: "1px solid black",
          width: "100%",
          marginTop: "10px",
          backgroundColor: "lightyellow",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody >
          {
            showDetails.map((data) => {
              const deleteData = () => {
                const newArray = [...showDetails];
                newArray.splice(newArray.indexOf(data), 1);
                setShowDetails(newArray);
              }
              return (
                <tr key = {data.aadhar}>
                  <td>{data.name}</td>
                  <td>{data.dob}</td>
                  <td>{data.aadhar}</td>
                  <td>{data.mobile}</td>
                  <td>{data.age}</td>
                  <td>
                    <button onClick={deleteData}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
      {/* <h4 className={styles.h4}>{showElement ? null : "No Data"}</h4> */}


      {showElement && (
        <form className={styles.input_container}>
          <input id="name" type="text" placeholder="Name" required />
          <input id="dob" type="date" placeholder="Date of Birth" required />
          <input maxLength={"12"} id="aadhar" type="number" placeholder="Aadhar Number" required />
          <input maxLength={"10"}  id="mobile" type="number" placeholder="Mobile Number"  required />
          <input id="age" type="number" placeholder="Age" />
          <button onClick={saveData} >Save</button>
        </form>
      )}

      <div>
        <button className={styles.addperson} onClick={addPerson}>
          Add Data
        </button>
      </div>
    </div>
  );
};

export default Newperson;
