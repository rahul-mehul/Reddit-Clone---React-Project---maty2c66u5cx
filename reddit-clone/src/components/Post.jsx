import React, { useState } from 'react'

function Post() {

    const [upvote, setUpvate] = useState(0);
    const [downvote, setDownvote] = useState(0)
    function upFunc() {
        setUpvate(upvote + 1);
    }
    function downFunc1() {
        setDownvote(downvote + 1);
    }
    return (
        <div>
            <div className='home'>
                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                <button onClick={upFunc}>👍</button>
                <button onClick={downFunc1}>👎</button>
                <div className='para'>
                    <span>{upvote}</span>|
                    <span>{downvote}</span>
                </div>
            </div>

        </div>
    )

}
export default Post
