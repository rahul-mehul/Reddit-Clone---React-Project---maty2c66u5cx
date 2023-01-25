import React from 'react'
import '../styles/header.css'


function Header(props) {
    const headerBar = [
        { to: '/r/popupar', text: 'Popular' },
        { to: '/r/hot', text: 'Home' },
        { to: '/r/rising', text: 'Aboutus' },
        { to: '/r/controversial', text: 'Controversial' },
        { to: '/r/gilded', text: 'Gilded' }
    ]
    return (


        <div className='header'>
            <div className="header__left">
                <ul>
                    {
                        headerBar.map((ele) => <li><a href={ele.to}  >{ele.text}</a></li>
                        )
                    }
                    <li onClick={props.login}><h4 style={{ color: "green", cursor: "pointer" }
                    }>{props.status ? "Logout" : "Login"}</h4></li>
                </ul>
            </div>

            <div className="header__right">
                <i className='fas fa-bell'></i>
                <img src='' alt='' />
                <div className="header__user">
                    <span>Rahul Kumar</span>
                    <i className='fas fa-caret-down'></i>
                </div>
            </div>


        </div>

    )
}

export default Header
