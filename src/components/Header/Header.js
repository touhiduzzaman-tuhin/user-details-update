import React from 'react';
import {  Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/user.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-style'>
            <img src={logo} alt=""/>

            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to='/home'>
                        <Button className="mr-3" variant="outline-info">Home</Button>
                    </Link>
                    <Link to='/about'>
                        <Button className="mr-3" variant="outline-info">About</Button>
                    </Link>
                    <Link to='/details'>
                        <Button variant="outline-info">User Details</Button>
                    </Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;