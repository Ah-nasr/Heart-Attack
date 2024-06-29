import styled from "styled-components";


export const Profilesection =styled.div
`
    /* padding:50px 0px;
    height: auto;
    background-color:#FFF; */

    padding: 50px 0px ;
    overflow: hidden;
`

export const Myprofile = styled .div
`

    /* width: 50%;
    float: left;
    position: relative;
    left :15%;
    transform: translate(-20%,1%);  */

    position: relative;
    left :15%;
    transform: translate(-20%,1%);  
    width: 50%;
    float: left;
    

`

export const  Mytitle = styled.h2
`
   font-size: 40px; 
   margin-bottom :20px;
   /* color: -webkit-link; */
`

export const Mylist = styled.ul
`
    list-style-type: none;
`

export const Myitem = styled.li
`
    margin-bottom: 8px;
`
export const Myspan = styled.span
`
    /* font-weight: bold;
    margin-right: 5%; */

    display:inline-block;
    width: 100px;
    font-weight: bold;
`

export const Mylink =styled.a
`
    /* text-decoration: none;
    color: chocolate; */

    font-weight: normal;
    color: #eb5424;
    text-decoration: none;
    &:hover
    {
        color:blue;
        opacity:0.9;
    }
`







export const Someskills = styled.div
`

    /* width: 50%;
    display: inline-block; */

    width: 50%;
    float: left;
`

export const Skillstitle =styled.h2
`
    font-size: 40px; 
    margin-bottom: 3%;
 `


 export const Skillsparagraph = styled.p
 `
    /* margin-top: 0px;
    margin-bottom: 5%;
    width: 80%;
    font-weight:100;
    opacity: 0.7; */
    
    width: 80%;
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
 `
 
 export const Bar =styled.div
 `
    /* margin-bottom: 5%; */
    overflow: hidden;
    padding: 10px 0px;
    margin-bottom: 10px;
 `
 
 export const Bartitle =styled.span
 `
    float: left;
 `

 export const Barpercent =styled.span
`  
    /* float: right;
    margin-right: 30%; */
    float: right;
    margin-right: 100px;
 
`

export const Parent =styled.div
 `
    width: 80%;
    background: #dddada;
    height: 2px;
    clear: both;
    position: relative;
    top: 2px;
 `

 export const Barspan =styled.span
 `
    background: #eb5424;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: ${ props => props.line ===1 ? '100%' : props.line ===2 ? '90%' :'80%'}
 `
 
