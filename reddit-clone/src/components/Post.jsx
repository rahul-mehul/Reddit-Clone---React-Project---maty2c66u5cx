import React, { useState } from 'react'

function Post() {

    const [upvote, setUpvate] = useState(0);
    const [downvote, setDownvote] = useState(0)

    return (
        <div>

            <div className='home'>
                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                <button onClick={() => setUpvate(upvote + 1)}>👍</button>
                <button onClick={() => setDownvote(downvote + 1)}>👎</button>
                <div className='para'>
                    <span>{upvote}</span>|
                    <span>{downvote}</span>
                </div>
            </div>

        </div>
    )

}
export default Post
