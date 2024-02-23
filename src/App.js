import React, {useState} from 'react';
import './App.css';
import Hero from './components/Hero';

function App() {
  const [storedCurrency, setStoredCurrency] = useState(() => {
        const storedCurrency = localStorage.getItem('currency');
        return storedCurrency ? JSON.parse(storedCurrency) : undefined;
  });
  const [storedCurrencyTime, setStoredCurrencyTime] = useState(() => {
        const storedCurrencyTime = localStorage.getItem('currencyTime');
        return storedCurrencyTime ? JSON.parse(storedCurrencyTime) : undefined;
  });
  const today = new Date();

  const fetchCurrency = async () => {
      
      const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=241030d828e44ecaad8b10944807f41f') //241030d828e44ecaad8b10944807f41f - AppID for API requests
      .then(response => response.json())
        .then(data => {
          setStoredCurrency(data); 
          localStorage.setItem('currency', JSON.stringify(data));
          localStorage.setItem('currencyTime', JSON.stringify(today));
        console.log(data);
      })
      .catch(error => console.error('Error fetching exchange rates:', error));
  }
  const todayDay = today.getDay();
  const storedDay = new Date(storedCurrencyTime);
  if (storedCurrencyTime) {
    if (storedDay.getDay !== today.getDay) {
      console.log('Робимо запит, бо попередній бів не сьогодні');
      fetchCurrency();
      setStoredCurrencyTime(today);
    }
  } else {
    console.log('Робимо запит, бо попереднього не було');
    fetchCurrency();
    setStoredCurrencyTime(today);
  }



    



  return (
    <Hero storedCurrency={storedCurrency} />
    
  );
}

export default App;