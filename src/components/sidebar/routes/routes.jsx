import audit from "../../../assets/sidebar/audit.svg";
import briefcase from "../../../assets/sidebar/briefcase.svg";
import chart from "../../../assets/sidebar/chart.svg";
import fee from "../../../assets/sidebar/fee.svg";
import guarantor from "../../../assets/sidebar/guarantor.svg";
import handshake from "../../../assets/sidebar/handshake.svg";
import karma from "../../../assets/sidebar/karma.svg";
import loan from "../../../assets/sidebar/loan.svg";
import piggy from "../../../assets/sidebar/piggy.svg";
import preference from "../../../assets/sidebar/preference.svg";
import pricing from "../../../assets/sidebar/pricing.svg";
import sack from "../../../assets/sidebar/sack.svg";
import save from "../../../assets/sidebar/save.svg";
import scroll from "../../../assets/sidebar/scroll.svg";
import serviceAccount from "../../../assets/sidebar/servAcc.svg";
import trans from "../../../assets/sidebar/trans.svg";
import userCheck from "../../../assets/sidebar/user-check.svg";
import user from "../../../assets/sidebar/user.svg";
import services from "../../../assets/sidebar/services.svg";

export const sidebarRoutes = [
    { icon: user, title: "Users", route: "/users" },
    { icon: guarantor, title: "Guarantors", route: "/" },
    { icon: sack, title: "Loans", route: "/" },
    { icon: handshake, title: "Decision Models", route: "/" },
    { icon: piggy, title: "Savings", route: "/" },
    { icon: loan, title: "Loan Requests", route: "/" },
    { icon: userCheck, title: "Whitelist", route: "" },
    { icon: karma, title: "Karma", route: "" },
    { icon: briefcase, title: "Organization", route: "" },
    { icon: loan, title: "Loan Products", route: "" },
    { icon: save, title: "Savings Products", route: "" },
    { icon: fee, title: "Fees and Charges", route: "" },
    { icon: trans, title: "Transactions", route: "" },
    { icon: services, title: "Services", route: "" },
    { icon: serviceAccount, title: "Service Account", route: "" },
    { icon: scroll, title: "Settlements", route: "" },
    { icon: chart, title: "Reports", route: "" },
    { icon: preference, title: "Preferences", route: "" },
    { icon: pricing, title: "Fees and Pricing", route: "" },
    { icon: audit, title: "Audit Logs", route: "" },
];
