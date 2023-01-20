import React, { useState, useEffect } from "react";

function NavbarHomepage() {
    // POST SAVE FUNCTION LOCALSTORAGE
    const [postText, setPostText] = useState("");
    const [posts, setPosts] = useState([]);
    function savePost(e) {
        e.preventDefault();
        const newpost = { postText };
        setPosts([...posts, newpost])
        setPostText("");
    }
    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])

    // POPUP FUNCTION HERE
    const [popup, setPopup] = useState(false);
    function postAddFunction() {
        setPopup(!popup);
    };

    function closePop() {
        setPopup(false);
    };
    function removePost() {
        setPostText("")

    }


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

            <form onSubmit={savePost}>
                {popup ?

                    <div className='main-post'>
                        <div className="popup-post">
                            <div className="popup-header">
                                <p>Add new post</p>
                                <p className='x' onClick={closePop}>❌</p>
                            </div>
                            <div className='popup-title'>
                                <label htmlFor="">Post title</label> <br></br>
                                <textarea name="post" id="post" value={postText}
                                    onChange={(e) => setPostText(e.target.value)} ></textarea>
                            </div><br></br>
                            <div className="post-btn">
                                <button className='btn-save' >Save</button>
                                <button className='btn-remove' onClick={removePost}>Remove</button> <br></br>

                            </div>
                        </div>
                    </div> : ""}
            </form>


        </div>
    );
}
export default NavbarHomepage;