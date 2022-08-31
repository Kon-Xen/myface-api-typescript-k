import React, { useEffect, useState } from "react";

function Posts() {

    const [data, setMyData] = useState(null);

    useEffect(
        () => {
            fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setMyData(data));
        }, []
    );



    return (
        <div>
            <h1> hello!</h1>
            {console.log(data)}
        </div>
    )
}
export default Posts;