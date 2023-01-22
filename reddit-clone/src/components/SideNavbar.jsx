import React from "react";
import '../styles/Sidenav.css'
import { LoginForm } from "./LoginForm";


const SideNavbar = () => {
    const menus = [
        { to: 'https://unsplash.com/s/photos/popular-destination', text: 'Popular' },
        { to: '/r/all', text: 'All' },
        { to: '/r/random', text: 'Random' }
    ];
    const subReddits = [
        'home',
        'television',
        'internet',
        'furniturs',
        'fashion',
        'books',
        'home-decor',
        'shop',
        'world',

    ]
    return (
        <>

            <div className="sideNav">
                <div className="sideNav__logo"><img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" alt="..." /></div>

                <LoginForm />

                <div className="sideNav__search">
                    <input type="text" name="search" placeholder="search" />
                    <i className="fas fa-search" />
                </div>
                <div className="sideNav__link">
                    <ul className="sideNav__menu">
                        {menus.map((menu) => <li><a href={menu.to}>{menu.text}</a></li>)}
                    </ul>
                    <hr />
                    <ul className="sidNav__subreddit">
                        {subReddits.map((sub) => <li><a href={`/r/${sub}`}>{sub}</a></li>)}
                    </ul>
                </div>

            </div>
        </>
    )
}
export default SideNavbar;