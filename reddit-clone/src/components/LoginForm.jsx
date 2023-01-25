import React, { useEffect, useState } from 'react'

// email and password LocalStorage
export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    function submitForm(e) {
        e.preventDefault();
        if (email && password) {
            const newEntry = { id: new Date().getTime().toLocaleString(), email, password };
            setAllEntry([...allEntry, newEntry]);
            // console.log(allEntry);
            setEmail("");
            setPassword("");
        } else {
            alert("plz fill email & password")
        }
    };

    useEffect(() => {
        localStorage.setItem('allEntry', JSON.stringify(allEntry))
    }, [allEntry])

    // pop function here

    const [popup, setPopup] = useState(false);
    function closePop() {
        setPopup(false);
    };

    function logInPopup() {
        setPopup(!popup);
    }


    return (
        <div>
            <button action="" className='btnLog' onClick={logInPopup}>Signup</button>
            {popup ?
                <form action='' onSubmit={submitForm}>
                    <div className='main-logIn'>
                        <div className='popup-logIn'>
                            <div className="popup-header">
                                <p> 💯 Create your free account </p>
                                <p className='x' onClick={closePop}>❌</p>
                            </div>
                            <div className='email-password'>
                                <div >
                                    <label htmlFor="email"> Email </label><br></br>
                                    <input type="text" name="email" id="email" value={email} placeholder='Enter email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label><br></br>
                                    <input type="password" name="password" id="password" value={password} placeholder='Enter Password' autoComplete='off' onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <small>Forgot Password</small>
                            </div>
                            <div>

                                <button className='btnLog'>Create Account</button>
                            </div>
                        </div>
                    </div>
                </form> : ""}

        </div>
    )
}
