import React ,{Component} from 'react'
import {Iconn ,Navbarsection ,Container , Logo , LogoText , Ulist , ListItem ,Anchor , LINK}  from'./style.js'
import { Link } from 'react-router-dom';
import './stylee.css';


import styled from 'styled-components';


const Navbar = () => {

    return(
            <div className='Navbarsection'>

                <div className='Containerr'>
                    <i class=" icon fa fa-heartbeat fa-2x Icon" ></i>
                    <div className='Logo'>
                        <h2 className='LogoText'>    Heart Detect  </h2>    
                    </div>

                    <ul className='Ulist'>
                        <li className='ListItem'> <Link className='LINK' to='/'> Home </Link> </li>
                        {/* <li className='ListItem'> <a className='Anchor' href='#'> Work </a> </li>
                        <li className='ListItem'> <a className='Anchor' href='#'> Portfolio </a> </li> */}
                        <li className='ListItem'> <a className='Anchor' href='#'> About </a> </li>
                        <li className='ListItem'> <Link className='LINK' to='/contact'> Contact </Link> </li>
                        <li className='ListItem'> <Link className='LINK' to='/Login'> Logout </Link> </li>
                        {/* <li className='ListItem'> <Link className='LINK' to='/Login'> Login </Link> </li>
                        <li className='ListItem'> <Link className='LINK' to='/Signup'> Register </Link> </li> */}
                     

                    </ul>
                    

                </div>
                
            </div>
            )
} 

export default Navbar;