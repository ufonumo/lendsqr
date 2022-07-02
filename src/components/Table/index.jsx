import React, { useEffect } from "react";
import { BiFilter, BiLoader, BiUserX } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import styles from "./table.module.scss";
import { useQuery } from "react-query";
import { Menu, Pagination } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

const Table = () => {
    const { isLoading, data } = useQuery("Data", () =>
        fetch(`${process.env.REACT_APP_BASE_URL}/users?_limit=10`).then((res) => res.json()),
    );
    useEffect(() => {}, [data]);

    const page = 1;
    const initialPage = 2;
    const total = 4;
    const boundaries = 8;
    const onChange = () => {};

    const rows = data?.map((item, index) => (
        <tr key={index} className={styles.borderBottom}>
            <td className={styles.row}>{item?.company?.name}</td>
            <td className={styles.row}>{item?.name}</td>
            <td className={styles.row}>{item?.email}</td>
            <td className={styles.row}>{item?.phone}</td>
            <td className={styles.row}>May 15, 2020 10:00 AM</td>
            <td className={styles.row}>
                <span className={styles.status}>Inactive</span>
            </td>
            <td>
                <Menu
                    transition="fade"
                    styles={{
                        itemHovered: " font-sans",
                        itemBody: "px-4 py-2 font-sans",
                    }}
                    control={
                        <button type="button" style={{ border: "none", background: "transparent" }}>
                            <FaEllipsisV color="#545F7D" />
                        </button>
                    }
                >
                    <Link to={`/userDetail/${item.id}`}>
                        <Menu.Item icon={<FiEye size={20} color="#545f7d" id={item?.id} />}>
                            <span className={styles.menu_option}>View Details</span>
                        </Menu.Item>
                    </Link>

                    <Menu.Item icon={<BiUserX color="#545f7d" id={item?.id} />}>
                        <span className={styles.menu_option}>Blacklist User</span>
                    </Menu.Item>
                    <Menu.Item icon={<RiUserFollowLine color="#545f7d" id={item?.id} />}>
                        <span className={styles.menu_option}>Activate User</span>
                    </Menu.Item>
                </Menu>
            </td>
        </tr>
    ));

    const [opened, handlers] = useDisclosure(false);

    const tableHead = [
        {
            title: "Organization",
            icon: (
                <Menu
                    opened={opened}
                    onOpen={handlers.open}
                    transition="fade"
                    control={
                        <button type="button" style={{ border: "none", background: "transparent" }}>
                            <BiFilter size={20} color="#545F7D" />
                        </button>
                    }
                >
                    <Menu.Item>
                        <div className={styles.filter_option}>
                            <label htmlFor="organization">Organization</label>
                            <select className={styles.select}>
                                <option value="">select</option>
                            </select>
                        </div>
                        <div className={styles.filter_option}>
                            <label htmlFor="user">Username</label>
                            <input
                                type="text"
                                name="user"
                                id="user"
                                className={styles.options}
                                placeholder="user"
                            />
                        </div>
                        <div className={styles.filter_option}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className={styles.options}
                                placeholder="email"
                            />
                        </div>
                        <div className={styles.filter_option}>
                            <label htmlFor="organization">Date</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className={styles.options}
                                placeholder="date"
                            />
                        </div>
                        <div className={styles.filter_option}>
                            <label htmlFor="Phone">Phone Number</label>
                            <input
                                type="text"
                                name="Phone Number"
                                id="Phone"
                                className={styles.options}
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className={styles.filter_option}>
                            <label htmlFor="Status">Status</label>
                            <select className={styles.select}>
                                <option value="">select</option>
                            </select>
                        </div>

                        <div className={styles.filter_btn}>
                            <button className={styles.reset} onClick={handlers.close}>
                                Reset
                            </button>
                            <button onClick={handlers.close} className={styles.filter}>
                                Filter
                            </button>
                        </div>
                    </Menu.Item>
                </Menu>
            ),
        },
        { title: "Username", icon: <BiFilter size={20} /> },
        { title: "Email", icon: <BiFilter size={20} /> },
        { title: "Phone number", icon: <BiFilter size={20} /> },
        { title: "Date joined", icon: <BiFilter size={20} /> },
        { title: "Status", icon: <BiFilter size={20} /> },
    ];
    return (
        <div>
            <table className={styles.table}>
                {isLoading ? (
                    <div>
                        <BiLoader />{" "}
                    </div>
                ) : (
                    <div className={styles.tableContainer}>
                        <thead className={styles.tableHeader}>
                            <tr className={styles.tableRow}>
                                {tableHead.map((item, index) => (
                                    <th
                                        key={index}
                                        style={{
                                            borderBottom: "none",
                                        }}
                                        className={styles.tableHead}
                                    >
                                        <div className={styles.tableContent}>
                                            <p>
                                                {item.title}
                                                <span>{item?.icon}</span>
                                            </p>
                                        </div>
                                    </th>
                                ))}

                                <th
                                    style={{
                                        borderBottom: "none",
                                    }}
                                ></th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </div>
                )}
            </table>

            <div className={styles.paginationContainer}>
                <div>
                    <span className={styles.showing}>
                        {" "}
                        <strong className="hidden md:inline-block">Showing:</strong> {page}-
                        {initialPage} of {total}
                    </span>
                </div>
                <div>
                    <Pagination
                        classNames={{
                            active: { color: "#545f7d", backgroundColor: "#545f7d" },
                            item: { backgroundColor: "#545f7d" },
                        }}
                        color="indigo"
                        boundaries={boundaries}
                        page={page}
                        onChange={onChange}
                        size="xs"
                        spacing="xs"
                        total={total}
                        initialPage={initialPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Table;
