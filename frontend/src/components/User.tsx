import React from "react";
import { useEffect, useState } from "react";
// import { BrowserRouter as Link, Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";

function User(): any {

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
        <div className="userList">
            {
                userData.results.map((user: any, index: number) => {
                    return (
                        <div
                            className="user"
                            key={index}
                        >
                            <img className="coverImage" src={user.coverImageUrl} />
                            <img className="userImage" src={user.profileImageUrl} />

                            <div className="details">
                                <Link id="link" to={{ pathname: `/users/${user.id}` }}>
                                    <p id="username">{user.username}</p>
                                </Link>

                                <p>{user.email}</p>
                            </div>

                        </div>
                    )
                })

            }

        </div>

    );


}
export default User