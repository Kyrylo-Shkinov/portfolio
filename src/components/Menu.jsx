import React from "react";
function Menu(props) { 

    const onClickMenuItemHandler = (event) => {
        props.setHideMenu();
        
    const textInsideP = event.target.textContent;
    console.log(textInsideP);
  
        props.setPage(textInsideP);
    }
    return (
        <div className="menu-wrapper">
            <ul className="menu-list">
                <li className="menu-item" onClick={onClickMenuItemHandler}>Quiz</li>
                <li className="menu-item" onClick={onClickMenuItemHandler}>Counter</li>
                <li className="menu-item" onClick={onClickMenuItemHandler}>Pointer</li>
                <li className="menu-item" onClick={onClickMenuItemHandler}>Contact book</li>
            </ul>
            <div className="real_projects">
                <p className="real_projects_title">Real Projects</p>
                <a href="https://humanitarianoffice.org" className="real_projects_link">Humanitarian Office</a>
            </div>
        </div>
    );
};
export default Menu;