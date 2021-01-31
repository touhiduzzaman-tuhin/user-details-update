import { faAsterisk, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UsersDetails.css';

const UsersDetails = (props) => {
    const {name, email, id} = props.user;
    // const history = useHistory();

    // const handleUserDetails = (userId) => {
    //     const url = `user/${userId}`;
    //     history.push(url)
    // }
    return (
        <div className='user-style'>
            <h3>Name : {name}</h3>
            <p>Email: {email}</p>

            <Link to={`/user/${id}`}>
                <Button>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> &nbsp;
                    User 
                    Details &nbsp;
                    <FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon>
                </Button>
            </Link>
        </div>
    );
};

export default UsersDetails;