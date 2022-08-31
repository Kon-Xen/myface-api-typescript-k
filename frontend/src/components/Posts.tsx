import React from "react";
import { useEffect, useState } from "react";

 function Posts() {

    const [data, setData] = useState<any>();

    useEffect(
        () => {            
            fetch("http://localhost:3001/posts/").then(response => response.json()).then(data => setData(data));
        }, []
    );

    return (
        <div>
            { data?.results[0].id }
        </div>

    );
}

export default Posts;
