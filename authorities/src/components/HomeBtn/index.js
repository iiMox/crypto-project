import React from "react";
import "./HomeBtn.css";

import homeIcon from "../../images/home.png";

const HomeBtn = () => {
    return (
        <img
            className='home-btn'
            src={homeIcon}
            alt='Home'
            onClick={(e) => {
                window.location.pathname = "/";
            }}
        />
    );
};

export default HomeBtn;
