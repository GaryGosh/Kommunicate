import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Search';

function Table() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(data => setUser(data.data));
    }, []);

    console.log(user);
    return (
        <div className="table">
            <Search user={user} />
            {user.map(({avatar, id, first_name, last_name, email}) => (
                <tr>
                    <td><img src={avatar} alt="user dp"/></td>
                    <td>{id}</td>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                </tr>
            ) )}
        </div>
    )
}

export default Table
