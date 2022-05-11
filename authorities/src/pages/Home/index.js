import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <button
                onClick={(e) => {
                    window.location.pathname = "/department";
                }}
            >
                Département
            </button>
            <button
                onClick={(e) => {
                    window.location.pathname = "/university";
                }}
            >
                Université
            </button>
            <button
                onClick={(e) => {
                    window.location.pathname = "/ministry";
                }}
            >
                Ministère
            </button>
        </div>
    );
};

export default Home;
