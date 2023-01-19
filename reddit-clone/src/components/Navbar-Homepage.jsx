import React, { useState } from "react";
import { LoginForm } from "./LoginForm";

function NavbarHomepage() {
    const [popup, setPopup] = useState(false);
    function postAddFunction() {
        setPopup(!popup);
    };

    function closePop() {
        setPopup(false);
    };

    return (
        <div>
            <div className='homepage'>
                <div>
                    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" width="100" height="50" alt="..." />
                </div>

                <div>
                    <button className='btnpost' onClick={postAddFunction}>Add new post</button>

                </div>
            </div>
            <LoginForm />
            <div>
                {popup ?
                    <div className='main-1'>
                        <div className="popup">
                            <div className="popup-header">
                                <p>Add new post</p>
                                <p className='x' onClick={closePop}>❌</p>
                            </div>
                            <div className='popup-title'>
                                <label htmlFor="">Post title</label> <br></br>
                                <textarea name="" id="" cols="43"  ></textarea>
                            </div><br></br>
                            <div className="popup-btn">
                                <button className='btn-close' onClick={closePop}>Close</button> <br></br>
                                <button className='btn-save' >Save</button>
                            </div>
                        </div>
                    </div> : ""}
            </div>


        </div>
    );
}
export default NavbarHomepage;