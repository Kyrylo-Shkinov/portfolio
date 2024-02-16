import React, { useState } from "react";
import logo from '../img/logo.svg';
import burger from '../img/burger.svg';
import Menu from "./Menu";

function Sidebar(props) {
    const [showMenu, setShowMenu] = useState(false);
    const setHideMenu = () => {
        setShowMenu(false);
    }
    const onClickToTheMainPage = () => {
        setShowMenu(!showMenu);
        props.setPage('Main');
    }
    const onClickShowMenuToggle = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className={`sidebar ${showMenu? '' : 'hidden'}`}>
            <div className={`sidebar-wrapper`}>
                <img onClick={onClickShowMenuToggle} src={burger} className={`sidebar-burger ${showMenu ? 'hidden': ''}`} alt='' />
                <img onClick={onClickToTheMainPage} src={logo} className={`sidebar-close-button ${showMenu ? '': 'hidden'}`} alt='' />
                <Menu setPage={props.setPage} setHideMenu={setHideMenu} />
            </div>
        </div>
    );
}

export default Sidebar;