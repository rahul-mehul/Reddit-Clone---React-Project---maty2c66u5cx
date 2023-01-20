import React, { useEffect, useState } from 'react'

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    // const userName = localStorage.getItem('email') ? localStorage.getItem('email') : 'admin@adm.com';

    function submitForm(e) {
        e.preventDefault();
        const newEntry = { email, password };
        setAllEntry([...allEntry, newEntry]);
        // console.log(allEntry);
        setEmail("");
        setPassword("");
    };
    // Local Storage
    useEffect(() => {
        localStorage.setItem('allEntry', JSON.stringify(allEntry))
    }, [allEntry])

    // for pop function 

    const [popup, setPopup] = useState(false);
    function closePop() {
        setPopup(false);
    };

    function logInPopup() {
        setPopup(!popup);
    }


    return (
        <div>
            <button action="" className='btnLog' onClick={logInPopup}>Log in</button>
            {popup ?
                <form action='' onSubmit={submitForm}>
                    <div className='main'>
                        <div className='popup'>
                            <div className="popup-header">
                                <p> 💯 Create your free account </p>
                                <p className='x' onClick={closePop}>❌</p>
                            </div>
                            <div className='email-password'>
                                <div >
                                    <label htmlFor="email">Username </label><br></br>
                                    <input type="text" name="email" id="email" value={email} placeholder='Enter username' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label><br></br>
                                    <input type="password" name="password" id="password" value={password} placeholder='Enter Password' autoComplete='off' onChange={(e) => setPassword(e.target.value)} />
                                </div>
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







// import React, { useState } from 'react';

// const App = () => {

//    const [name, setName] = useState('');
//    const [pwd, setPwd] = useState('');

//    const handle = () => {
//       localStorage.setItem('Name', name);
//       localStorage.setItem('Password', pwd);
//    };
//    const remove = () => {
//       localStorage.removeItem('Name');
//       localStorage.removeItem('Password');
//    };
//    return (
//       <div className="App">
//          <h1>Name of the user:</h1>
//          <input
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//          />
//          <h1>Password of the user:</h1>
//          <input
//             type="password"
//             placeholder="Password"
//             value={pwd}
//             onChange={(e) => setPwd(e.target.value)}
//          />
//          <div>
//             <button onClick={handle}>Done</button>
//          </div>
//          {localStorage.getItem('Name') && (
//             <div>
//                Name: <p>{localStorage.getItem('Name')}</p>
//             </div>
//          )}
//          {localStorage.getItem('Password') && (
//             <div>
//                Password: <p>{localStorage.getItem('Password')}</p>
//             </div>
//          )}
//          <div>
//             <button onClick={remove}>Remove</button>
//          </div>
//       </div>
//    );
// };
// export