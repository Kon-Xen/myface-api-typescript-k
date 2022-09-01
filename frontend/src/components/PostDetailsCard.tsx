import React from "react";

function PostDetailsCard({ postsDetails }): any {

    return (
        <div className="postDetails" >
            {
                postsDetails.map((post, index) => {
                    return (
                        <div className="postsCreated" key={index}>
                            <img src={post.imageUrl} />
                            <p>Created at: {post.createdAt}</p>
                            <p>{post.message}</p>
                        </div>
                    )
                })
            }
              
        
        </div>
    )


}

export default PostDetailsCard;