import styled from "styled-components";

export const Portsection  = styled.div
`
    background-color: #F8F8F8;
    overflow: hidden;
`

export const Porttitle = styled.h2
`
    text-align: center;
    font-size: 35px;
`

export const Portlist = styled.ul
`
    list-style-type: none;
    text-align: center;
    margin: 20px 0px;
`

export const Portitem = styled.li
`
    display: inline-block;
    width: 100px;
    padding:10px;
    background-color : ${props => props.active  ? '#eb5424' : '' }
    color:${props => props.active ? '#FFF' : '#000' }
`


export const Cups = styled.div
`
    width: 25%;
    float:left;
    font-size: 0;
    position: relative;

    &:hover > p > span
    {
        opacity: 1;
        font-size: 15px;
    }
    
    &:hover > p
    {
        background-color: rgba(235, 84, 36, 0.5);
    }

   
`


export const Images = styled.img
`
    width: 100%;
`

export const Overlay =styled.p
`

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(235, 84, 36,0);

`

export const Span = styled.span
`
    font-size: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #FFF;
    display: block;
    padding: 10px 20px;
    cursor:pointer;
    border:2px solid #eb5424;
    opacity:0;
`


// .Cups:hover  .overlay 
// {
//     background-color: rgba(235, 84, 36, 0.5);
// }

// .Cups:hover  .Span 
// {
//     opacity: 1;
//     font-size: 15px;
// }


export const Box = styled.div
`
height:auto;
`