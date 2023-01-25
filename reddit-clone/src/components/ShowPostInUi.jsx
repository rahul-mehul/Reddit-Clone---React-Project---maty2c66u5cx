import React, { useState } from 'react'

function ShowPostInUi(props) {
    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);
    return (
        <div>
            <div className='post-display' key={props.id}>

                <p className='post-text'> {props.text}<span>{props.postedBy} </span> </p>

                <div className='btn-vote'>

                    <button onClick={() => setUpvote(upvote + 1)}><i className="fa-solid fa-caret-up"></i></button>
                    <button onClick={() => setDownvote(downvote + 1)} ><i className="fa-solid fa-caret-down"></i></button><br></br>

                    <span className='upvote'>{upvote}</span>|
                    <span className='downvote'>{downvote}</span>
                    <i onClick={() => props.functionHandler(props.id)} className="fa-sharp fa-solid fa-trash"></i>
                </div>
            </div>

        </div>
    )
}

export default ShowPostInUi
