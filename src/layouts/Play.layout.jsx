import React from "react";

import PlayNavBar from "../components/NavBar/playNavbar.component";

const MovieLayout = (props) => {
    return (
        <>
        <PlayNavBar />
        {props.children}
        </>
    );
}

export default MovieLayout;