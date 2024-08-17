import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./Transaction.css";
import { TbDownload } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const Navigation = () => {
    const details = [
        { title: "All", count: 349 },
        { title: "Deposit", count: 114 },
        { title: "Withdraw", count: 213 },
        { title: "Trade", count: 22 },
    ];

    return (
        <>
            {details.map((detail) => (
                <li key={detail.title}>
                    <span className="cursor-pointer px-6 py-4 text-xs font-semibold hover:border-b-2 border-customPurple800">
                        {detail.title}
                        <span className="p-1 px-2 ml-3 rounded-xl bg-customGrey500">
                            {detail.count}
                        </span>
                    </span>
                </li>
            ))}
        </>
    );
};

const Transaction = () => {

    const transactions = [
        {
            transactionId: "HD82NA2H",
            transactionDateTime: { date: "2022-06-09", time: "07:06 PM" },
            transactionTypeMethod: { type: "INR Deposit", method: "E-Transfer" },
            transactionAmount: { amount: "+ ₹81,123.10", additional: null },
            transactionStatus: "Pending",
        },
        {
            transactionId: "HD82NB2H",
            transactionDateTime: { date: "2022-06-07", time: "02:48 PM" },
            transactionTypeMethod: { type: "INR Withdraw", method: "Wire Transfer" },
            transactionAmount: { amount: "- ₹81,123.10", additional: null },
            transactionStatus: "Processing",
        },
        {
            transactionId: "HD82NC2H",
            transactionDateTime: { date: "2022-06-04", time: "09:21 AM" },
            transactionTypeMethod: { type: "Buy", method: null },
            transactionAmount: {
                amount: "+ 12.48513391 BTC",
                additional: "- $81,123.10",
            },
            transactionStatus: "Processing",
        },
        {
            transactionId: "HD82ND2H",
            transactionDateTime: { date: "2022-06-03", time: "01:32 PM" },
            transactionTypeMethod: { type: "Sell", method: null },
            transactionAmount: {
                amount: "- 0.36401628 BTC",
                additional: "+ $19,378.84",
            },
            transactionStatus: "Completed",
        },
        {
            transactionId: "HD82NE2H",
            transactionDateTime: { date: "2022-06-03", time: "09:02 AM" },
            transactionTypeMethod: { type: "BTC Deposit", method: null },
            transactionAmount: {
                amount: "+ 4.13946104 BTC",
                additional: "+ $37,929.31",
            },
            transactionStatus: "Cancelled",
        },
        {
            transactionId: "HD82NH2H",
            transactionDateTime: { date: "2022-06-01", time: "01:56 PM" },
            transactionTypeMethod: { type: "BTC Withdraw", method: null },
            transactionAmount: {
                amount: "- 10.00000000 BTC",
                additional: "- $62,017.58",
            },
            transactionStatus: "Completed",
        },
    ];

    return (
        <section className="hero-container">
            <Button icon={TbDownload} text="Export CSV" customClass="w-fit ml-auto" />
            <section className="navigation-transactions-container">
                <nav className="navigation-bar">
                    <ul>
                        <Navigation />
                    </ul>
                    <div>
                        <button>
                            <IoSearchOutline className="text-2xl" />
                        </button>
                        <Input
                            type={"search"}
                            id={"searchTransaction"}
                            placeholder={"Search by ID or Destination"}
                            customClass="text-sm border-0"
                        />
                    </div>
                </nav>

                <section className="all-transactions">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <p>ID</p>
                                </th>
                                <th>
                                    <p className="flex items-center gap-1">
                                        Date & Time <TiArrowSortedDown />
                                    </p>
                                </th>
                                <th>
                                    <p>Type</p>
                                </th>
                                <th>
                                    <p className="flex items-center gap-1">
                                        Amount <TiArrowSortedDown />
                                    </p>
                                </th>
                                <th>
                                    <p>Status</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => {
                                const {
                                    transactionId,
                                    transactionDateTime: { date, time },
                                    transactionTypeMethod: { type, method },
                                    transactionAmount: { amount, additional },
                                    transactionStatus,
                                } = transaction;

                                return (
                                    <tr key={transaction.transactionId}>
                                        <td>
                                            <p>{transactionId}</p>
                                        </td>
                                        <td>
                                            <p className="flex flex-col">
                                                {date}
                                                <span>{time}</span>
                                            </p>
                                        </td>
                                        <td>
                                            <p className="flex flex-col">
                                                {type}
                                                {method && <span>{method}</span>}
                                            </p>
                                        </td>
                                        <td>
                                            <p className="flex flex-col">
                                                {amount}
                                                {additional && <span>{additional}</span>}
                                            </p>
                                        </td>
                                        <td>
                                            <p
                                                className={`status ${transactionStatus === "Completed"
                                                    ? "bg-green-500"
                                                    : transactionStatus === "Cancelled"
                                                        ? "bg-red-500"
                                                        : transactionStatus === "Pending"
                                                            ? "bg-gray-500"
                                                            : transactionStatus === "Processing" &&
                                                            "bg-yellow-500"
                                                    }`}
                                            >
                                                {transactionStatus}
                                            </p>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    );
};

export default Transaction;
