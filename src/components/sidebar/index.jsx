import React from "react";
import styles from "./sidebar.module.scss";
import home from "../../assets/sidebar/home.svg";
import briefcase from "../../assets/sidebar/briefcase.svg";
import { sidebarRoutes } from "./routes/routes";
import { Link } from "react-router-dom";

const SideBar = ({ pageTitle }) => {
    return (
        <aside className={styles.container}>
            <div className={styles.switch}>
                <img src={briefcase} alt="home" />
                <select name="switch" id="">
                    <option value="Switch Organization">Switch Organization</option>
                </select>
            </div>
            <div className={styles.dashboard}>
                <img src={home} alt="home" />
                <Link
                    to="/users"
                    className={pageTitle === "Dashboard" ? styles.active : styles.inactive}
                >
                    <p>Dashboard</p>
                </Link>
            </div>
            <ul>
                <li className={styles.linkTitle}>CUSTOMERS</li>
                {sidebarRoutes.slice(0, 8).map((route, index) => (
                    <li key={index} className={styles.links}>
                        <Link
                            to={route?.route}
                            className={pageTitle === route?.title ? styles.active : styles.inactive}
                        >
                            <img src={route.icon} alt={route.title} />

                            <p>{route.title}</p>
                        </Link>
                    </li>
                ))}

                <li className={styles.linkTitle}>BUSINESSES</li>
                {sidebarRoutes.slice(8, 17).map((route, index) => (
                    <li key={index} className={styles.links}>
                        <Link
                            to={route?.route}
                            className={pageTitle === route?.title ? styles.active : styles.inactive}
                        >
                            <img src={route.icon} alt={route.title} />

                            <p>{route.title}</p>
                        </Link>
                    </li>
                ))}
                <li className={styles.linkTitle}>SETTINGS</li>
                {sidebarRoutes.slice(17, 20).map((route, index) => (
                    <li key={index} className={styles.links}>
                        <Link
                            to={route?.route}
                            className={pageTitle === route?.title ? styles.active : styles.inactive}
                        >
                            <img src={route.icon} alt={route.title} />

                            <p>{route.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
