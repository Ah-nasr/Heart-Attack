import React ,{Component} from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Login = () => {
    return(
        <div className='Login_section'>
            <div className="login-container">
                <h2>Login</h2>
                <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <Link to="/">
                <button type="submit">Login</button
                ></Link>
                </form>
                <div className="signup-link">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
        </div>
      </div>
    )
} 

export default Login;