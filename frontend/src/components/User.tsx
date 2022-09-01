import React from "react";
import { useEffect, useState } from "react";
// import { BrowserRouter as Link, Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";

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
                        
                            {/* <Link to="/users/details"><UserDetails id={user.id}>{user.name}</Link> */}
 
                            <Link to={{ pathname: `/users/${user.id}` }}>
                                <p>{user.username}</p>                              
                            </Link>


                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <img src={user.profileImageUrl}/>
                            
                        </div>
                    )
                })

            }  
            {/* <UserDetails id={user.id} /> // the one we are clicking on */}
        </div>

    );


}
export default User