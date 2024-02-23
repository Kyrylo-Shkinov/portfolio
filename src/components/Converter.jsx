import React, { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import img from '../img/swap.svg';


function Converter(props) {
  const [showModal, setShowModal] = useState(true);
  function onClickHideModal () {
    setShowModal(false);
  };
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [copied, setCopied] = useState(false);


  const handleSwapCurrencies = () => {
    // Обміняти місцями валюти
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setCopied(false);
  };
  const currency = props.storedCurrency;
  const finalCurrency = currency.rates[toCurrency];
  const firstCurrency = currency.rates[fromCurrency];
  const result = ((finalCurrency * amount) / firstCurrency).toFixed(2);
  

  const onClickCopiText = (e) => {
      // Копіюємо вміст тегу p
      var copiedText = e.target.innerText;

      // Використовуйте API буфера обміну для копіювання тексту
      var textarea = document.createElement('textarea');
      textarea.value = copiedText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopied(true);
  };
  
  
  
  
  
  return (
    <>
    <div className="converter">
      <h1 className="converter-title">Currency Converter</h1>
      <form className="converter-form">
        <div className="converter-form-box left">
          <label htmlFor="fromCurrency" className="converter-label">From:</label>
          <select id="fromCurrency" value={fromCurrency} onChange={(e) => { setFromCurrency(e.target.value); setCopied(false); }} className="converter-select">
            <option value="UAH">Ukrainian Hryvnia (UAH)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="CZK">Czech Koruna (CZK)</option>
            <option value="PLN">Polish Zloty (PLN)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="TRY">Turkish Lira (TRY)</option>
            <option value="BGN">Bulgarian Lev (BGN)</option>
            <option value="DKK">Danish Krone (DKK)</option>
            <option value="HUF">Hungarian Forint (HUF)</option>
            <option value="RON">Romanian Leu (RON)</option>
            <option value="SEK">Swedish Krona (SEK)</option>
            <option value="NOK">Norwegian Krone (NOK)</option>
            <option value="GEL">Georgian Lari (GEL)</option>
          </select>
          <input className="converter-numbers-text" type="number" id="amount" value={amount} onChange={(e) => { setAmount(e.target.value); setCopied(false); }} />
        </div>
        <div className="converter-form-box right">
          <label htmlFor="toCurrency" className="converter-label">To:</label>
          <select id="toCurrency" value={toCurrency} onChange={(e) => { setToCurrency(e.target.value); setCopied(false); }} className="converter-select">
            <option value="UAH">Ukrainian Hryvnia (UAH)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="CZK">Czech Koruna (CZK)</option>
            <option value="PLN">Polish Zloty (PLN)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="TRY">Turkish Lira (TRY)</option>
            <option value="BGN">Bulgarian Lev (BGN)</option>
            <option value="DKK">Danish Krone (DKK)</option>
            <option value="HUF">Hungarian Forint (HUF)</option>
            <option value="RON">Romanian Leu (RON)</option>
            <option value="SEK">Swedish Krona (SEK)</option>
            <option value="NOK">Norwegian Krone (NOK)</option>
            <option value="GEL">Georgian Lari (GEL)</option>
          </select>
          <p className="converter-numbers-text" onClick={onClickCopiText} data-tooltip-id="copiText">{result}</p>
          <ReactTooltip
            id="copiText"
            place="bottom"
            variant="info"
            content={copied ? "Текст скопійовано" : "Копіювати текст"}
          />
        </div>
          
        </form>
      <button onClick={handleSwapCurrencies} className="converter-swap">
        <img src={img} alt="" />
        </button>
    </div>
    {
                showModal ? <div className="undermodal">
                    <div className="undermodal-gray"onClick={onClickHideModal}></div>
                <div className="modal">
                    <h3 className="modal-converter-title">Currency Converter</h3>
                    <p className="modal-converter-text">I use the <span>Open Exchange rates API</span> to get the current exchange rate. Due to the fact that the number of requests per month is very limited, I added the function of <span>saving the current rate in localStorage,</span> which will be updated once a day (if the user visits the site). <br />You can also copy the result by simply clicking on it, you can conveniently swap currencies...
<br /> <span>Usage:</span> I think you'll figure it out :-)</p>
                    <button className="modal-close" onClick={onClickHideModal}>Let`s see</button>
                </div>
            </div> : ''
  }
  </>
  )
};

export default Converter;