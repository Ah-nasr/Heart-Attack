import React ,{ Component,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import'./style.css';
import axios from 'axios';
import styled ,  { keyframes }from 'styled-components';
const Result = () => {

    const[rst ,setrst] = useState([]);

    useEffect( () => {
        axios.get('js/data.json').then( res => { setrst(res.data.results)})
    },[])

    const Testresults = rst.map( (resultitem) =>
    {
        return(
            <Resultbox  key={resultitem.id}  type={resultitem.output}>
            <div className='Result'> 
              {resultitem.output}
            </div>  
          </Resultbox>
        )
    })
    return(
    <div className='Resultsection'>
         <div className='Resultcontainer'>
                <h2 className='Resulttitle'> Thank you</h2>
                <h2 className='Resultoutput'> Result</h2>
               {Testresults}
               <Link to='/TestView'>
                  <button className='Edit_button'> Edit </button>
                </Link>
        </div>
    </div>
    )
} 

export default Result;


const GcolorAnimation = keyframes`
  0% {
    background-color: #28a745; /* Starting color */
  }
  50% {
    background-color: transparent; /* Disappearing color */
  }
  100% {
    background-color: #28a745; /* Reappearing color */
  }
`;
const RcolorAnimation = keyframes`
  0% {
    background-color: #a82734; /* Starting color */
  }
  50% {
    background-color: transparent; /* Disappearing color */
  }
  100% {
    background-color: #a82734; /* Reappearing color */
  }
`;



export const Resultbox = styled.div
`
  margin-top: 5%;
  height: 30%;
  width: 20%;
  margin-left: 40%;
  border-radius: 20px;
  background-color: ${props => props.type === 'Positive' ? '#28a745': '#a82734' } ;
  animation: ${ props => props.type === 'Positive' ? GcolorAnimation : RcolorAnimation } 1.5s infinite alternate ;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  
`