import React from "react";
import { Route } from "react-router";
import PlayLayout from "../layouts/Play.layout.jsx";


const PlayHOC = ({component : Component, ...rest}) => {
    return (
        <>
        <Route 
            {...rest}
            component = {(props) => (
                <PlayLayout>
                    <Component {...props} />
                </PlayLayout>
            )}
        />
        </>
    );
}

export default PlayHOC;