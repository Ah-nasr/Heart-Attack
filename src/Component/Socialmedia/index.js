import React ,{ Component, useState , useEffect} from 'react'
import { Socialmediaa,Social,Icon,Info1,Info2,Paragraph}from './style.js'
import axios from 'axios'
const Socialmedia = () => {



    const[social_arr ,setsocial] = useState([]);

    useEffect( () => {
                        axios.get('js/data.json').then( res => { setsocial(res.data.social)})
                     },[])
    
     const Socialitems  = social_arr.map( (sitems) => {
        return(
            <Social key={sitems.id} type ={sitems.id} >
                <Icon className={sitems.icon}></Icon>
                <Paragraph>
                    <Info1> {sitems.title}</Info1>
                    <Info2> {sitems.body}</Info2>
                </Paragraph>
            </Social>
        )
     })               

    return(
        <Socialmediaa>

            {Socialitems}

        </Socialmediaa>
    )
} 

export default Socialmedia;