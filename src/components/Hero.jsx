import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Counter from "./Counter";
import MainPage from "./MainPage";
import Quiz from "./Quiz";
import Placeholder from "./Placeholder";
import Pointer from "./Pointer";


function Hero() {
  const [page, setPage] = useState('Main');
  


  return (
    <div className='app_wrapper'>
      <Sidebar setPage={setPage} />
      {page=='Main' ? <MainPage /> : ''}
      {page == 'Counter' ? <Counter /> : ''}
      {page == 'Quiz' ? <Quiz /> : ''}
      {page == 'Pointer' ? <Pointer /> : ''}
      {page == 'Contact book' ? <Placeholder /> : ''}
    
  </div>
  );
}

export default Hero;