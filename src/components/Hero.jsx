import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Counter from "./Counter";
import MainPage from "./MainPage";


function Hero() {
  const [page, setPage] = useState('Main');
  


  return (
    <div className='app_wrapper'>
      {page=='Main' ? <MainPage /> : ''}
      <Sidebar setPage={setPage} />
      {page=='Counter'? <Counter />: '' }
    
  </div>
  );
}

export default Hero;