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
        <div className="post">
            {
                data.results.map((post :any, index:number) => {
                    return (
                        <div className="userPost"key={index} >
                            <img src={post.imageUrl}/>
                            <p>Date:{post.createdAt}</p>
                            <p>Created by: {post.postedBy.name}</p>
                            <p>{post.message}</p>
                             
                        </div>
                    )
                })

            }          
        </div>

    );


}

export default Posts;
