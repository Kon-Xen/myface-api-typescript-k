import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PostDetailsCard from "./PostDetailsCard";
function UserCard({ usersData }): any {
     


    return (
        <div   className="user" >

            <img className="coverImage" src={usersData.coverImageUrl} />
            <img className="userImage" src={usersData.profileImageUrl} />

            <div className="details">
                <Link id="link" to={{ pathname: `/users/${usersData.id}` }}>
                    <p id="username">{usersData.username}</p>
                </Link>

                <p>{usersData.email}</p>
            </div>                  
            
        </div>
    )
}

export default UserCard;