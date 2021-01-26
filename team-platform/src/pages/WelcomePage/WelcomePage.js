import React from 'react';

/**
* Renders a <WelcomePage /> component
* @param  props
* @param  props.message - text which will be put in paragraph to output
*/
const WelcomePage = ( props ) => {
    return (
        <>
            <p>{props.message}</p>
        </> 
    )
};

export default WelcomePage;