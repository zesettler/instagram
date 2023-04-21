import React, { useState } from 'react';
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password);
    };

    return (
        <div className='login'>
            <img src="https:/www.pngkey.com/png/full/828-8286178_mackey-work-needs-no-elaborate-presentation-or-distracting.png" />
            <input onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' value={email} />
            <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' value={password} />
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
}

export default Login;