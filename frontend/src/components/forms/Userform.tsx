import React, { useState } from "react";

interface BodyData {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
}
function UserForm() {

    const [status, setStatus] = useState("Submit");
    const [error, setError] = useState();
 

    const [userData, setUserData] = useState<BodyData>(
        {
            name: '',
            username: '',
            email: '',
            coverImageUrl: '',
            profileImageUrl: '',
        }
    );

    function onSubmit(event: any) {

        event.preventDefault();

        setStatus("Sending...");
        

        fetch('http://localhost:3001/users/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => res.json())
            .then(res => console.log(res));
        // todo here we do the api request to create the new user

    }

    return (
        <div>
            <form>
                <div className="Name">
                    <label>Name:</label>
                    <input
                        name='Name'
                        type='text' required
                        onChange={e => setUserData({ ...userData, name: e.target.value })}
                    />
                </div>

                <div className="userName">
                    <label>User Name:</label>
                    <input
                        name='userName'
                        type='text' required
                        onChange={e => setUserData({ ...userData, username: e.target.value })}
                    />
                </div>

                <div className="Email">
                    <label htmlFor="formEmail">
                        Email address
                    </label>
                    <input
                        name='userEmail'
                        type="email"
                        onChange={e => setUserData({ ...userData, email: e.target.value })}
                        required
                        placeholder="name@example.com"
                    />
                </div>

                <div className="userImage">
                    <label>Profile image:</label>
                    <input
                        name='userImage'
                        type='text'
                        onChange={e => setUserData({ ...userData, profileImageUrl: e.target.value })}
                    />
                </div>

                <div className="coverImage">
                    <label>Cover image:</label>
                    <input
                        name='coverImage'
                        type='text'
                        onChange={e => setUserData({ ...userData, coverImageUrl: e.target.value })}
                    />
                </div>

                <button type="submit"
                    value="Send"
                    className=""
                    onClick={submit => onSubmit(submit)}
                >
                    {status}
                </button>

            </form>

        </div>
    )
}

export default UserForm;