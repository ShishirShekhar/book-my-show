import React from "react";

// Componenets
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.jsx";
import NavBar from "../components/NavBar/navbar.component.jsx"

const DefaultLayout = (props) => {
    return (
        <>
        <NavBar />
        <HeroCarousal />
        {props.children}
        </>
    );
}

export default DefaultLayout;