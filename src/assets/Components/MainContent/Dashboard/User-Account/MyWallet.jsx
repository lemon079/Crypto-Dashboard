import React from "react";
import './MyWallet.css'
import Button from "../../Button";
import TextMoney from "../TextMoney";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { PiCurrencyInrBold } from "react-icons/pi";

const wallet = [
  {
    text: "Total Portfolio Value",
    balance: "112,312.24",
    currencyIcon: PiCurrencyInrBold,
    currencyInWords: null,
    infoIcon: BsFillInfoCircleFill,
  },
  {
    text: "Wallet Balances",
    balance: "22.39401000",
    currencyIcon: null,
    currencyInWords: 'BTC',
    infoIcon: null,
  },
  {
    text: "",
    balance: "1,300.00",
    currencyIcon: PiCurrencyInrBold,
    currencyInWords: 'INR',
    infoIcon: null,
  },
];

const MyWallet = () => {
  return (
    <>
        <section className="wallet-container">
          {wallet.map((wallet) => {
            return (
              <TextMoney
                key={wallet.text}
                text={wallet.text}
                balance={wallet.balance}
                currencyIcon={wallet.currencyIcon}
                currencyInWords={wallet.currencyInWords}
                infoIcon={wallet.infoIcon}
              />
            );
          })}
        </section>


        <section className="buttons-container">
          <Button icon={LuArrowDownToLine} text={"Deposit"} />
          <Button icon={LuArrowUpToLine} text={"Withdraw"} />
        </section>
    </>
  );
};

export default MyWallet;
