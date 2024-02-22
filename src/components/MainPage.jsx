import React from "react";
function MainPage(props) {
  const setShowMenu = props.setShowMenu;
    return (
      <div className="hero-wrapper">
        <div className="hero-text-box">
          <h1>Shkinov Kyrylo</h1>
          <p className="hero-title">React developer</p>
        </div>
        <p className="hero-ps">Psss! Click on the burger!</p>
      </div>
            )
}
            
export default MainPage;