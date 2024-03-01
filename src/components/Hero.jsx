import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Counter from "./Counter";
import MainPage from "./MainPage";
import Quiz from "./Quiz";
import Placeholder from "./Placeholder";
import Pointer from "./Pointer";
import Converter from "./Converter";
import Cv from "./Cv";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function Hero(props) {
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
  const router = createBrowserRouter([
    {
      path: "/portfolio/",
      element: <MainPage />,
    },
    {
      path: "/portfolio/counter",
      element: <Counter />,
    },
    {
      path: "/portfolio/quiz",
      element: <Quiz />,
    },
    {
      path: "/portfolio/pointer",
      element: <Pointer />,
    },
    {
      path: "/portfolio/converter",
      element: <Converter storedCurrency={props.storedCurrency} />,
    },
    {
      path: "/portfolio/about",
      element: <Cv />,
    },
]);





  return (
    <>
      <Sidebar setPage={setPage} setAppState={setAppState} showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className={`app_wrapper`} onClick={onClickCloseMenu} >
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default Hero;