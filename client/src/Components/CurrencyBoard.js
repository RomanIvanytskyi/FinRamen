import React from "react";
import { useState, useEffect } from "react";
import {
  FaMoneyBill,
  FaDollarSign,
  FaEuroSign,
  FaHryvnia,
  FaWonSign,
  FaYenSign,
} from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import Balance from "./Balance";
import "./Transactions.css";

export default function CurrencyBoard() {
  const [currency, setCurrency] = useState("USD");

  const ChangeCurrency = (data) => {
    setCurrency(data);
  };

  return (
    <>
      <div className="opt">
         Currency : <Balance />
      </div>
      <div className="w-12 bg-zinc-500 currDrop currPicker" color="#d7ccc8">
        <Select label={currency}>
          <Option onClick={() => ChangeCurrency("USD")} className="opt">
            <FaDollarSign /> USD 
          </Option>
          <Option onClick={() => ChangeCurrency("EURO")} className="opt">
            <FaEuroSign />
            EURO
          </Option>
          <Option onClick={() => ChangeCurrency("UAH")} className="opt">
            <FaHryvnia />
            UAH
          </Option>
          <Option onClick={() => ChangeCurrency("KRW")} className="opt">
            <FaWonSign />
            KRW
          </Option>
          <Option onClick={() => ChangeCurrency("JPY")} className="opt">
            <FaYenSign />
            JPY
          </Option>
        </Select>
      </div>
    </>
  );
}
