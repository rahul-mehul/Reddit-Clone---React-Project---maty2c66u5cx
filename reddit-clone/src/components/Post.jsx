import React, { useState } from 'react'

const newPost = localStorage.getItem("posts");

function Post() {

    const [upvote, setUpvate] = useState(0);
    const [downvote, setDownvote] = useState(0)

    return (
        <div>

            <div className='post-display'>
                <p className='post-text'> {newPost} </p>
                <div className='btn-vote'>
                    <button onClick={() => setUpvate(upvote + 1)}>👍</button>
                    <button onClick={() => setDownvote(downvote + 1)}>👎</button><br />

                    <span className='upvote'>{upvote}</span>|
                    <span className='downvote'>{downvote}</span>
                </div>
            </div>|

        </div>
    )

}
export default Post
