import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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


        <div key={userId} >
            <img src={userData.profileImageUrl} />
            <img src={userData.coverImageUrl} />
            <p>{userData.name}</p>
            <p>{userData.username}</p>
            <p>{userData.email}</p>


        </div>
    )


}
       
export default UserDetails;