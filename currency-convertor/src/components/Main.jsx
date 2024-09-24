import React, { useState, useEffect } from "react";
import InputBox from "./common/InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const Main = () => {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);

  // Fetching currency API from custom hook to get currency info
  const currencyData = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyData);

  // Function to convert currency
  const convert = () => {
    let finalAmount = Number(amount * currencyData[toCurrency]).toFixed(2);
    setConvertedAmount(finalAmount);
  };

  // Function to swap input boxes and currencies
  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <InputBox
            label="From"
            amount={amount}
            selectCurrency={fromCurrency}
            currencyOptions={currencyOptions}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFromCurrency(currency)}
          />
          <div className="flex items-center justify-center">
            <button
              className=" mt-2 mb-2 outline-none bg-slate-600 text-white rounded-lg p-2 cursor-pointer"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            selectCurrency={toCurrency}
            currencyOptions={currencyOptions}
            onAmountChange={(amount) => setConvertedAmount(amount)}
            onCurrencyChange={(currency) => setToCurrency(currency)}
          />
          <button
            onClick={convert}
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg  mt-2 mb-2"
          >
            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
