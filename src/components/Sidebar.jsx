import React from "react";
import logo from '../img/logo.svg';
import burger from '../img/burger.svg';
import Menu from "./Menu";

function Sidebar(props) {
    const showMenu = props.showMenu;
    const setShowMenu = props.setShowMenu;
    const setHideMenu = () => {
        setShowMenu(false);
    }
    const onClickShowMenuToggle = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className={`sidebar ${showMenu? '' : 'hidden'}`}>
            <div className={`sidebar-wrapper`}>
                <img onClick={onClickShowMenuToggle} src={burger} className={`sidebar-burger ${showMenu ? 'hidden': ''}`} alt='' />
                <img onClick={onClickShowMenuToggle} src={logo} className={`sidebar-close-button ${showMenu ? '': 'hidden'}`} alt='' />
                <Menu setPage={props.setPage} setAppState={props.setAppState} setHideMenu={setHideMenu} />
            </div>
        </div>
    );
}

export default Sidebar;