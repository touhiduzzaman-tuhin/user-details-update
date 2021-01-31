import React, { useEffect, useState } from 'react';
import UsersDetails from '../UsersDetails/UsersDetails';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUsers(data);
        })
    }, [])
    return (
        <div style={{fontFamily: 'Roboto'}}>
            {
                users.map(user => <UsersDetails key={user.id} user={user}></UsersDetails>)
            }
        </div>
    );
};

export default Home;