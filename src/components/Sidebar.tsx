import React from "react";
import Menu from "./Menu";

function Sidebar(props) {
    const logo = require("../img/logo.svg").default as string;
    const burger = require("../img/burger.svg").default as string;
    const showMenu = props.showMenu;
    const setShowMenu = props.setShowMenu;
    const setHideMenu = (): void => {
        setShowMenu(false);
    }
    const onClickShowMenuToggle = (): void => {
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