import React from "react";
import { useEffect, useState } from "react";

function Posts() {

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
                data.map((post, index) => {
                    return (
                        <div key={index} >
                            <p>{post.id}</p>
                            <p>{post.imageUrl}</p>
                            <p>{post.createdAt}</p>
                            <p>{post.message}</p>
                            <p>{post.postedBy}</p>
                            <p>{post.username }</p>
                        </div>
                    )
                })

            }

            {/* {data.results[0].id}
                 {data.results[0].message}
                 {data.results[0].imageUrl} */}
        </div>

    );


}

export default Posts;
