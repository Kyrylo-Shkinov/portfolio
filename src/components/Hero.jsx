import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Counter from "./Counter";
import MainPage from "./MainPage";
import Quiz from "./Quiz";
import Placeholder from "./Placeholder";
import Pointer from "./Pointer";


function Hero() {
  const [showMenu, setShowMenu] = useState(false);
  const [appState, setAppState] = useState(() => {
        const storedState = localStorage.getItem('appState');
        return storedState ? JSON.parse(storedState) : 'Main';
    });
  const onClickCloseMenu = () => {
      setShowMenu(false);
    }
    // Викликається при зміні стану та оновлює localStorage
    useEffect(() => {
        localStorage.setItem('appState', JSON.stringify(appState));
    }, [appState]);
    const [page, setPage] = useState(appState);

  return (
    <>
      <Sidebar setPage={setPage} setAppState={setAppState} showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className='app_wrapper' onClick={onClickCloseMenu} >
        
        {page==='Main' ? <MainPage/> : ''}
        {page === 'Counter' ? <Counter /> : ''}
        {page === 'Quiz' ? <Quiz /> : ''}
        {page === 'Pointer' ? <Pointer /> : ''}
        {page === 'Contact book' ? <Placeholder /> : ''}
        {page === 'Converter' ? <Placeholder /> : ''}
    
      </div>
      </>
  );
}

export default Hero;