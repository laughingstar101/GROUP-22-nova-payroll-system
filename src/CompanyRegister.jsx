import TopBar from "./components/TopBar.jsx";
import styles from './CompanyRegister.module.css'
import Button from "./components/Button.jsx";
import { Link } from "react-router-dom";

export default function CompanyRegister() {
    return (
        <div className={styles.signup}>
            <TopBar />
            <section className={styles.signupContainer}>
                <h1>Register Company!</h1>    
                <section className={styles.formContainer}>
                    <label for="nameInput" className={styles.formLabel}>Company name:</label>
                    <input type="text" id="nameInput" className={styles.formInput}></input>
                </section>
                <Button/>
                <Link to='/companyLogin' className={styles.loginbtn}>Have company? Login</Link>
            </section>
        </div>
    )
}