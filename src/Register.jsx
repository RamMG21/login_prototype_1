import React, { useState} from "react";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(email);

    }

    return(
        <div className="auth-from-container">
            <h2>Register</h2>
        <from className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" id="name" placeholder="Full name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="@declesh.com" id="email"></input>
        
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password"></input>
            <button type="submit">Log In</button>
        </from>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login Here</button>
        </div>
    )
}