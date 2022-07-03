import { Drawer } from "@mantine/core";
import React, { useState } from "react";
import Navbar from "../navbar";
import SideBar from "../sidebar";
import styles from "./layout.module.scss";

const Layout = ({ pageTitle, children }) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <div className={styles.container}>
            <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
            <div
                className={!openSidebar ? styles.container_sidebar_open : styles.container_sidebar}
            >
                <div className={styles.sidebar_content}>
                    <SideBar pageTitle={pageTitle} />
                </div>

                <Drawer
                    opened={openSidebar}
                    onClose={() => setOpenSidebar(false)}
                    withCloseButton={true}
                    overlayColor="inherit"
                    classNames={{
                        closeButton: styles.closeButton,
                    }}
                    onScroll={true}
                >
                    <SideBar pageTitle={pageTitle} />
                </Drawer>

                <main className={styles.main}>
                    <div className={styles.main_container}>{children}</div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
