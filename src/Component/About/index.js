import React ,{Component} from 'react'
import {Aboutinfo,Aboutsection,Anchor ,Infodesc,Infodir,Infotitle,Span} from './style.js';
const About = () => {
    return (
    <Aboutsection>
        <div className='Container'>
            <Aboutinfo>
                <Infotitle>
                    <Span> This is</Span> Me
                </Infotitle>
                <Infodir> Creative Director</Infodir>
                <Infodesc>
                    Lorem ipsum is a placeholder text commonly used in publishing and graphic design to demonstrate the visual form of a document 
                </Infodesc>
        
                <Infodesc>
                    Lorem ipsum is a placeholder text commonly used in publishing and graphic design to demonstrate the visual form of a document 
                </Infodesc>
            </Aboutinfo>
        </div>
        
    </Aboutsection>
    )
} 

export default About;