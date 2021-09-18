import React from "react";

// Componenets
import MovieNavBar from "../components/NavBar/movieNavbar.component";

const MovieLayout = (props) => {
    return (
        <>
        <MovieNavBar />
        {props.children}
        </>
    );
}

export default MovieLayout;