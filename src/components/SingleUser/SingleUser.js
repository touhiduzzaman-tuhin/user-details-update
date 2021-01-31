import { faEnvelopeOpenText, faEnvelopeSquare, faLocationArrow, faMap, faPhone, faTv, faUser, faWonSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleUser.css';

const SingleUser = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const [mobile, setMobile] = useState('');

    console.log(user);
    const {name, email, username, website, company, address, phone} = user;
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setUser(data))
    }, [])

    const handleDisplayPhone = (phone) => {
        setMobile(phone);
    }

    return (
        <div className="singleUser-main-style">
            <h3>Selected User Details</h3>
            <hr/>
            <div className="">
                <div className="singleUser-body-style">
                    <p>Name : <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {name}</p>
                    <p>User Name : {username}</p>
                    <p>E-mail : <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon> {email}</p>
                    <p>Phone : <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> {mobile}</p>
                    <p>Website : <FontAwesomeIcon icon={faWonSign} ></FontAwesomeIcon> {website}</p>
                    <p>Company : {user.company && company.name}</p>
                    <p>Address : <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> {user.address && address.suite} - {user.address && address.street}, {user.address && address.city}</p>
                    <Button className="mb-3" onClick={() => handleDisplayPhone(phone)} variant='warning'>
                        <FontAwesomeIcon icon={faTv}></FontAwesomeIcon> &nbsp;
                        Display 
                        Phone &nbsp;
                        <FontAwesomeIcon icon = {faPhone}></FontAwesomeIcon>
                    </Button>
                </div>      
            </div>   
        </div>
    );
};

export default SingleUser;