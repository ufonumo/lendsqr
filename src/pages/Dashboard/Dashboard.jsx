import React from "react";
import Layout from "../../components/Layout";
import styles from "./dashboard.module.scss";
import users from "../../assets/dashboard/users.svg";
import people from "../../assets/dashboard/people.svg";
import save from "../../assets/dashboard/save.svg";
import loans from "../../assets/dashboard/loans.svg";
import Table from "../../components/Table";

const Dashboard = () => {
    return (
        <Layout pageTitle="Users">
            <div className={styles.container}>
                <h1>Users</h1>

                <div className={styles.user_content}>
                    <div className={styles.content}>
                        <img src={users} alt="users" />
                        <h3>Users</h3>
                        <p>2,453</p>
                    </div>
                    <div className={styles.content}>
                        <img src={people} alt="users" />
                        <h3>Active Users</h3>
                        <p>2,453</p>
                    </div>
                    <div className={styles.content}>
                        <img src={loans} alt="users" />
                        <h3>Users with Loans</h3>
                        <p>12,453</p>
                    </div>
                    <div className={styles.content}>
                        <img src={save} alt="users" />
                        <h3>Users with Savings</h3>
                        <p>102,453</p>
                    </div>
                </div>

                <Table />
            </div>
        </Layout>
    );
};

export default Dashboard;
