import React from "react";

// Componenets
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import NavBar from "../components/NavBar/navbar.component"

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