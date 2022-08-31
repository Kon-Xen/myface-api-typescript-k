import React from "react";
import { useEffect, useState } from "react";

function User():any {

    const [userData, setUserData] = useState<any>();

    useEffect(
        () => {
            fetch("http://localhost:3001/users/").then(response => response.json()).then(userData => setUserData(userData));
        }, []
    );


    if (!userData) {

        return (
            <div>
                <h1>awaiting data </h1>
            </div>
        );

    }

    return (
        <div>
            {
                userData.results.map((user :any, index:number) => {
                    return (
                        <div key={index} >
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <img src={user.coverImageUrl}/>
                            <img src={user.profileImageUrl}/>
                            
                        </div>
                    )
                })

            }          
        </div>

    );


}