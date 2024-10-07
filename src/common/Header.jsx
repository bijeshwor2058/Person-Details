import styles from "./header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h3>Bijeshwor Sharma Directory App</h3>
      </div>

      <div className={styles.link}>
        <Link style={({
          backgroundColor: "lightblue",
          padding: '10px',
          border: '1px solid black',
          textDecoration: "none",
          color: "black"
        })} to= "/src/Component/Newperson.jsx" >Add New Person</Link>&nbsp;

        <Link to= "/src/Component/Retriveinfo.jsx" style={({
          backgroundColor: "lightblue",
          padding: '10px',
          border: '1px solid black',
          textDecoration: "none",
          color: "black"
        })}> Retrieve Information </Link>
      </div>
    </div>
  );
};

export default Header;
