import React from "react";

const ArticlesList = () => (
    //to use more than one element we need to use fragment here
    //even empty <> was enough to handle this problem in a modern way
    //content should be inside this

    <React.Fragment>
    <h1> Article List</h1>
    <p>
        Hmm, I don't know what to say, I'm just vibing here to learn some stuff eheheh...
        And I love my husband
    </p>

    <span>&#128150;</span>

    <p style={{color:'#FF0000', fontSize:36 }}>
        React bilen kadınları alelade sevemezsiniz bayım
    </p>
    
    </React.Fragment>
   
);

export default ArticlesList;