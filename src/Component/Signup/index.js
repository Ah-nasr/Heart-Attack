import React ,{ useState,useEffect,Component} from 'react'
import './style.css'
import { Link } from 'react-router-dom';
const Signup = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
        specialization: '',
        birthdate: '',
        password: '',
        confirmPassword: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log(formData);
      };
    
    return(
        <div className="signup-container">
            <h2>Sign Up</h2>
            {/* <form onSubmit={handleSubmit}> */}
                <form>
                <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber"  value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="specialization">Specialization:</label>
                <input type="text" id="specialization" name="specialization" value={formData.specialization} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="birthdate">Birthdate:</label>
                <input type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                
                <Link to="/">
                    <button type="submit">Sign Up</button>
                </Link>
                <div className="signup-link">
                <p>Already have an account? <Link to="/Login">Login</Link></p>
                </div>
            </form>
    </div>

    )
} 

export default Signup;