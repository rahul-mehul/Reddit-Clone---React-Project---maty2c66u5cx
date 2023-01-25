import React, { useState, useEffect } from "react";
import '../styles/post.css';
import ShowPostInUi from "./ShowPostInUi";

function Post() {

    // POST SAVE FUNCTION LOCALSTORAGE
    const [postText, setPostText] = useState("");
    const [posts, setPosts] = useState([]);
    function savePost(e) {
        e.preventDefault();

        if (postText) {
            const newpost = { id: new Date().getTime().toString(), postText };
            setPosts([...posts, newpost])
            setPostText("");
        } else {
            alert("plz fill the Post");
        }
    }
    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
        console.log(posts)
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

    function deletePost(id) {
        console.log('Delete')
        setPosts((oldpost) => {
            return oldpost.filter((ele, index) => {
                return index !== id
            })

        })
    }

    return (
        <>
            <button className='btnpost' onClick={postAddFunction}>Add new post</button>


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
            {posts.map((ele, ind) =>
                <ShowPostInUi
                    text={ele.postText}
                    key={ind}
                    id={ind}
                    functionHandler={deletePost} />

            )}

        </>
    );
}
export default Post;