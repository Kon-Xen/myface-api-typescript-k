import React from "react";
import { useEffect, useState } from "react";
// import { BrowserRouter as Link, Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

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
        <div className="userList" >
            {
                userData.results.map((user: any, index: number) => {
                    return (
                        <UserCard key={index} usersData={user} />
                    )
                })

            }

        </div>
    );


}
export default User