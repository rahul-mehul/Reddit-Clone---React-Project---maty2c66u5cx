import React from 'react'
import { LoginForm } from './LoginForm';
import NavbarHomepage from './Navbar-Homepage';
import Post from './Post';


export function Homepage() {

    return (
        <>
            <NavbarHomepage />
            <LoginForm />
            <Post />
            <Post />
            <Post />
        </>
    )
}


