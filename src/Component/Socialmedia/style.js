import styled from "styled-components";

export const Socialmediaa = styled.div
`
   height:auto;
    overflow:hidden;
`

export const Social = styled.div
`
    width:33.33%;
    float:left;
    box-sizing:border-box;
    padding: 100px 0px 100px 60px;
    background: ${props => props.type === 1 ? '#3b5998': props.type ===2 ? '#498cbf' : '#cc2127'};
`

export const Icon = styled.i
`
    width:50px;
    height:50px;
    background:#fff;
    text-align:center;
    line-height:50px;
    color:#888;
    float:left;
    margin-right:10px;
    margin-top:23px;
`
export const Paragraph = styled.p
`
    float:left;
    font-weight:bold;
    text-transform:uppercase;
    font-size:20px;
    color:#fff;
`

export const Info1 = styled.span
`
    display:block;
    margin-bottom:8px
`
export const Info2 = styled.span
`
font-weight:normal;
`