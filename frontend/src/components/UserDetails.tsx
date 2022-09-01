import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserCard from "./UserCard";
import PostDetailsCard from "./PostDetailsCard";

function UserDetails(): any {

    const [userData, setUserData] = useState<any>();
    const { userId } = useParams();

    useEffect(
        () => {
            fetch(`http://localhost:3001/users/${userId}/`).then(response => response.json()).then(userData => setUserData(userData));
        }, [userId]
    );


    if (!userData) {

        return (
            <div>
                <h1>awaiting data </h1>
            </div>
        );

    }

    return (
    <div key={userData.id}>
        <UserCard usersData={userData} />
        <PostDetailsCard postsDetails={userData.posts} /> 
        </div>
    )

}

export default UserDetails;