import React from "react";
import Currency from './Currency';

const TextMoney = ({
  text,
  balance = 0,
  infoIcon: InfoIcon,
  currencyIcon: CurrencyIcon,
  currencyInWords,
}) => {
  return (
    <section className='space-y-1'>
      <h2 className="text-customGrey800 font-semibold text-sm flex items-center gap-1">
        {text}
        <span>
          {InfoIcon && <InfoIcon />}
        </span>
      </h2>
      <h3 className="text-xl font-semibold flex items-center gap-1">
        {CurrencyIcon && <CurrencyIcon />} {balance}
        <span>
          <Currency text={currencyInWords} />
        </span>
      </h3>
    </section>
  );
};

export default TextMoney;
