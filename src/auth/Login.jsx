import React, { useState } from "react";
import styles from "./styles.module.scss";
import loginImage from "../assets/login/login.svg";
import logo from "../assets/login/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
    const [isShown, setIsSHown] = useState(false);

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <img src={logo} alt="logo" />

                <div className={styles.bottomImage}>
                    <img src={loginImage} alt="login" />
                </div>
            </div>
            <div className={styles.left}>
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
                <form action="" className={styles.form}>
                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="email"
                            aria-label="email"
                        />
                    </div>
                    <div className={styles.formGroup_password}>
                        <input
                            name="password"
                            type={isShown ? "text" : "password"}
                            placeholder="Password"
                            id="password"
                            prefix="Show"
                            aria-label="password"
                        />
                        <span
                            className={styles.showPassword}
                            onClick={togglePassword}
                            checked={isShown}
                        >
                            Show
                        </span>
                    </div>
                    <div>
                        {" "}
                        <span className={styles.forgotPassword}>Forgot PASSWORD?</span>
                    </div>

                    <div>
                        <Link to="/users">
                            <button type="button" className={styles.button}>
                                LOG IN
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
