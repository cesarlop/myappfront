import React from 'react';
import { useLocation } from 'react-router-dom';

function View404(){
    const location = useLocation(); 
    return(
        <>
            <h1>404</h1>
            <h3>URL { location.pathname } does not exist.</h3>
        </>
    )
};

export default View404;