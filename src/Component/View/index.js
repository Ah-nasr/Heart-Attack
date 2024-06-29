import React ,{Component} from 'react'
import './style.css';
import { Link } from 'react-router-dom';
const View = () => {
    return(
        <div className='View_section'>
            <div className="patient-data-container">
                <h2>Patient Data</h2>
                <div className='Roww'>
                <strong>Name:</strong> ALi Mohamed
                </div>

                <div className='Roww'>
                <strong>Phone Number:</strong> 01000234675
                </div>

                <div className='Roww'>
                <strong>Email Address:</strong> Alimohamed@gmail.com
                </div>

                <div className='Roww'>
                <strong>Address:</strong> Egypt/cairo
                </div>

                <div className='Roww'>
                <strong>Birthdate:</strong> 1/1/2001
                </div>

                <div className='Roww'>
                <strong>Test Date 1:</strong> 5/5/2005- <strong>Result:</strong>Negative
                <Link to='/TestView'>
                    <button className='vview_button1'> View </button>
                </Link>
                </div>

                <div className='Roww'>
                <strong>Test Date 2:</strong> 10/10/2010 - <strong>Result:</strong> Positive
                <Link to='/TestView'>
                  <button className='vview_button2'> View </button>
                </Link>
                </div>
               
        </div>
    </div>
    )
} 

export default View;