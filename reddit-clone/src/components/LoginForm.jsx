import React, { useState } from 'react'

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    function submitForm(e) {
        e.preventDefault();
        const newEntry = { email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log(newEntry);
        console.log(allEntry);
    };

    const [popup, setPopup] = useState(false);
    function closePop() {
        setPopup(false);
    };
    function logInPopup() {
        setPopup(!popup);
    }


    return (
        <div>
            <button className='btnLog' onClick={logInPopup}>Log in</button>
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
                                    <label htmlFor="email">Email </label><br></br>
                                    <input type="email" name="email" id="email" value={email} placeholder='Your Email Address' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label><br></br>
                                    <input type="password" name="password" id="password" value={password} placeholder='Your Password' autoComplete='off' onChange={(e) => setPassword(e.target.value)} />
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