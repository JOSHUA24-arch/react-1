import { useState } from "react"


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
       <div className="auth-form-container">
            <form className="register-form" action="" onSubmit={handleSubmit}>

                <label htmlFor="full_name">Full Name</label>
                <input value={name} name="name" placeholder="Full Name" id="name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit">Log In</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>IF you have an account, Login In here</button>
       </div>
    )
}