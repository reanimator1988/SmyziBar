import React from "react";
import { useEffect } from "react";



export default () => {
    useEffect(() => {
        const handleClick = (event) => {
            event.preventDefault();
            const menuElement = document.getElementById("menu-id");
            menuElement.scrollIntoView({ behavior: "smooth" });
        };

        const link = document.querySelector(".main-btn");
        link.addEventListener("click", handleClick);

        return () => {
            link.removeEventListener("click", handleClick);
        };
    }, []);

    return <div className="main-descr">
        <p className="Description">
            Alcohol for the modern drinker
        </p>
        <p className="main-text">
            Light and refreshing flavors made with real, clean ingredients you can feel good about. Just pour, sip, and enjoy.
        </p>

        <a href="#" className="main-btn">Shop ALL</a>

    </div>
}