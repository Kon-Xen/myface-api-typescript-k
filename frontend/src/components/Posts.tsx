import React from "react";
import { useEffect, useState } from "react";

function Posts():any {

    const [data, setData] = useState<any>();

    useEffect(
        () => {
            fetch("http://localhost:3001/posts/").then(response => response.json()).then(data => setData(data));
        }, []
    );

    if (!data) {

        return (
            <div>
                <h1>awaiting data </h1>
            </div>
        );

    }

    return (
        <div>
            {
                data.results.map((post :any, index:number) => {
                    return (
                        <div key={index} >
                            <p>{post.id}</p>
                            <p>{post.imageUrl}</p>
                            <p>{post.createdAt}</p>
                            <p>{post.message}</p>
                            <p>{post.postedBy.name}</p>
                            <p>{post.username }</p>
                        </div>
                    )
                })

            }          
        </div>

    );


}

export default Posts;
