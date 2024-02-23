import React, {useState} from "react";
function Menu(props) { 
    const [showModal, setShowModal] = useState(false);
    function onClickHideModal () {
        setShowModal(false);
    };
    function onClickDontHideModal () {
        setShowModal(true);
    };

    const onClickMenuItemHandler = (event) => {
        props.setHideMenu();
        const textInsideP = event.target.textContent;
        props.setPage(textInsideP);
        props.setAppState(textInsideP);
    }
    return (
        <>
        <div className="menu-wrapper">
            <div className="menu-header">
                <p className="menu-header-text">Menu</p>
            </div>
            <ul className="menu-list">
                <li className="menu-item" onClick={onClickMenuItemHandler}>Main</li>
                <li className="menu-item" onClick={onClickMenuItemHandler}>Counter</li>
                <li className="menu-item" onClick={onClickMenuItemHandler}>Quiz</li>
                <li className="menu-item" onClick={onClickMenuItemHandler}>Animation</li>
                <li className="menu-item" onClick={onClickMenuItemHandler}>Contact book</li>
                <li className="menu-item" onClick={onClickMenuItemHandler}>Converter</li>
            </ul>
            <div className="real_projects">
                <p className="real_projects_title">Real Projects</p>
                    <p className="real_projects_link" onClick={() => {setShowModal(true)}}>Humanitarian Office</p>
            </div>
        </div>
        {
                showModal ? <><div className="undermodal" >
                    <div className="undermodal-gray" onClick={onClickHideModal}></div>
                    <div className="modal">
                    <div className="modal-close-christ" onClick={onClickHideModal}></div>
                    <h3 className="modal-link-title">Humanitarian Office page</h3>
                    <p className="modal-link-text">This is the project that started my study of React. In 2022, I started very actively engaged in humanitarian work in this office, and one of the needs was the creation of a site for partners. So I took up this job while also learning a new technology for me. This site is rarely updated, but it means a lot to me.
<br />Here I use basic principles, API requests and a library
i18n for translating the site into a second language. <br />And also worked with svg and maps</p>
                    <button className="modal-close link" href=""onClick={onClickHideModal}><a href="https://humanitarianoffice.org" className="real_projects_link">Let's see</a></button>
                </div>
                </div>
                </> : ''
            }
        </>
                        

    );
};
export default Menu;