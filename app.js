// import React  from "react";
// import ReactDOM from "react-dom" ;

let child = React.createElement("div" , {id : "parent"} , 
    [
        React.createElement("div" , {id : "child1"} ,
            [React.createElement("h1" , {} , "Its heading 1 inside child1"),
             React.createElement("h1" , {} , "Its heading 2 in child1")
            ] ,
        ) ,
        
        React.createElement("div" , {id : "child2"} ,
            [React.createElement("h1" , {} , "Its heading 1 in child2"),
             React.createElement("h1" , {} , "Its heading 2 in child2")
            ]
        )
    ]
) 

let root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(child)


// child , parent are ->React object => HTML (browser understandable)
