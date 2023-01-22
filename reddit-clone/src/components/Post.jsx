import React, { useState, useEffect } from "react";
import '../styles/post.css';

function Post() {

    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);

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
            alert("plz fill the data");
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
            {posts.map((ele) =>
            // const {id,postText,postedBy} =ele;
            (<div className='post-display' key={ele.id}>

                <p className='post-text'> {ele.postText}<span>{ele.postedBy} </span> </p>

                <div className='btn-vote'>
                    <button onClick={() => setUpvote(upvote + 1)}  >👍</button>
                    <button onClick={() => setDownvote(downvote + 1)}  >👎</button><br />

                    <span className='upvote'>{upvote}</span>|
                    <span className='downvote'>{downvote}</span>

                    {/* <button onClick={deleteFunc}>Delete</button> */}
                </div>
            </div>
            ))}

        </>
    );
}
export default Post;