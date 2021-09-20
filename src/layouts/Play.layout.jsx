import React from "react";

import PlayNavBar from "../components/NavBar/playNavbar.component";

const MovieLayout = (props) => {
    return (
        <>
            <div className="bg-gray-300">
            <PlayNavBar />
            {props.children}
        </div>
        </>
    );
}

export default MovieLayout;