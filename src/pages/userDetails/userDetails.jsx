import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Layout from "../../components/Layout";
import styles from "./userdetail.module.scss";
import profile from "../../assets/dashboard/profile.svg";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetails = () => {
    let { id } = useParams();
    const { data } = useQuery("Date", () =>
        fetch(`${process.env.REACT_APP_BASE_URL}/users/${id}`).then((res) => res.json()),
    );
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <Layout pageTitle="Users">
            <div className={styles.mainContainer}>
                <div className={styles.link}>
                    <Link to="/users">
                        {" "}
                        <BiArrowBack size={25} /> Back to Users
                    </Link>
                </div>

                <div className={styles.userTitle}>
                    <h3>User Details</h3>
                    <div className={styles.userButton}>
                        <button className={styles.blacklist}>Blacklist User</button>
                        <button className={styles.activate}>Activate User</button>
                    </div>
                </div>

                <div className={styles.userTab}>
                    <div className={styles.userContainer}>
                        <div className={styles.userContent}>
                            <img src={profile} alt="" />
                            <div>
                                <h3>{data?.name}</h3>
                                <span>{data?.email}</span>
                            </div>
                        </div>
                        <div className={styles.contentSecond}>
                            <div>
                                <h3>User’s Tier</h3>
                                <span>
                                    <BsStarFill color="#E9B200" />
                                    <AiOutlineStar color="#E9B200" />
                                    <AiOutlineStar color="#E9B200" />
                                </span>
                            </div>
                        </div>
                        <div className={styles.contentSecond}>
                            <div>
                                <h4>₦200,000.00</h4>
                                <span>9912345678/Providus Bank</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userLinks}>
                        <ul>
                            <li
                                className={toggleState === 1 ? styles.active : styles.inactive}
                                onClick={() => toggleTab(1)}
                            >
                                {" "}
                                General Details
                            </li>
                            <li
                                className={toggleState === 2 ? styles.active : styles.inactive}
                                onClick={() => toggleTab(2)}
                            >
                                Documents
                            </li>

                            <li
                                className={toggleState === 3 ? styles.active : styles.inactive}
                                onClick={() => toggleTab(3)}
                            >
                                Bank Details
                            </li>
                            <li
                                className={toggleState === 4 ? styles.active : styles.inactive}
                                onClick={() => toggleTab(4)}
                            >
                                Loans
                            </li>
                            <li
                                className={toggleState === 5 ? styles.active : styles.inactive}
                                onClick={() => toggleTab(5)}
                            >
                                Savings
                            </li>
                            <li
                                className={toggleState === 6 ? styles.active : styles.inactive}
                                onClick={() => toggleTab(6)}
                            >
                                App and System
                            </li>
                        </ul>
                    </div>
                </div>

                {toggleState === 1 ? (
                    <div className={styles.userTab}>
                        <div className={styles.content}>
                            <h3>Personal Information</h3>
                            <div className={styles.container}>
                                <div className={styles.labels}>
                                    <p>full Name</p>
                                    <span>{data?.name}</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Phone Number</p>
                                    <span>{data?.phone}</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Email Address</p>
                                    <span>{data?.email}</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Bvn</p>
                                    <span>4778852145588</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Gender</p>
                                    <span>Female</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Marital status</p>
                                    <span>Married</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Children</p>
                                    <span>10</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Type of residence</p>
                                    <span>{data?.address?.street}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3>Education and Employment</h3>
                            <div className={styles.container}>
                                <div className={styles.labels}>
                                    <p>level of education</p>
                                    <span>B.Sc</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>employment status</p>
                                    <span>Employed</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>sector of employment</p>
                                    <span>FinTech</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Duration of employment</p>
                                    <span>2 years</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>office email</p>
                                    <span>grace@lendsqr.com</span>
                                </div>

                                <div className={styles.labels}>
                                    <p>Monthly income</p>
                                    <span>₦200,000.00- ₦400,000.00</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>loan repayment</p>
                                    <span>140,000</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3>Socials</h3>
                            <div className={styles.container}>
                                <div className={styles.labels}>
                                    <p>Twitter</p>
                                    <span>@grace_effiom</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Facebook</p>
                                    <span>@grace_effiom</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Instagram</p>
                                    <span>@grace_effiom</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3>Guarantor</h3>
                            <div className={styles.container}>
                                <div className={styles.labels}>
                                    <p>full Name</p>
                                    <span>grace effiom</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Phone Number</p>
                                    <span>08015566878</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Email Address</p>
                                    <span>grace_effiom@gmail.com</span>
                                </div>
                                <div className={styles.labels}>
                                    <p>Relationship</p>
                                    <span>Sister</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.userTab}> <h5>No Information Available</h5></div>
                )}
            </div>
        </Layout>
    );
};

export default UserDetails;
