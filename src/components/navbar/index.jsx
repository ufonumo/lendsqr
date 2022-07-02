import React from "react";
import styles from "./navbar.module.scss";
import logo from "../../assets/login/logo.svg";
import avatar from "../../assets/login/avatar.svg";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = ({ setOpenSidebar, openSidebar }) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <div className={styles.sidebarMenu}>
                    <AiOutlineMenu size={20} onClick={() => setOpenSidebar(!openSidebar)} />
                </div>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.navbar_searchbar}>
                <div className={styles.search}>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search for anything"
                    />
                    <div className={styles.search_img}>
                        {" "}
                        <AiOutlineSearch color="#fff" size={25} />
                    </div>
                </div>
            </div>
            <div className={styles.options}>
                <a href="#/">Docs</a>
                <IoMdNotificationsOutline color="#213F7D" size={25} />
                <div className={styles.profile}>
                    <img src={avatar} alt="avatar" />
                    <select name="profile" id="">
                        <option value="Adedeji">Adedeji</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
