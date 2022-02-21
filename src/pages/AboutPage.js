import React from "react";

const AboutPage = () => (
    //to use more than one element we need to use fragment here
    //even empty <> was enough to handle this problem in a modern way
    //content should be inside this

    <React.Fragment>
    <h1> About me</h1>
    <p>
        I am Elif!
    </p>

    <span>&#128150;</span>
    
    </React.Fragment>
   
);

export default AboutPage;