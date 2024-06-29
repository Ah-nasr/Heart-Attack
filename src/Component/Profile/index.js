import React ,{Component ,useState ,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Profilesection , Myprofile , Mytitle ,Mylist ,Myitem ,Myspan ,Mylink , Someskills ,Skillstitle,Skillsparagraph ,Bar, Bartitle ,Barpercent ,Barspan ,Barline1 ,Barline2 ,Barline3 ,Parent} from'./style.js';

const Profile = () => {

    
        const[ mybars , setbars] = useState([]);
    
        useEffect( () => {
            axios.get('js/data.json').then(res => { setbars(res.data.bars) } )
        } ,[])
    
        const Barlist = mybars.map( (baritem) =>
        {
          return (
                    <Bar key={baritem.id}>
                <Bartitle> {baritem.title}</Bartitle>
                <Barpercent> {baritem.percent}</Barpercent>
                <Parent>
                    <Barspan line={baritem.id}></Barspan>
                </Parent>
            </Bar> 
          )
        } )
    




    // const [barsss , setbars] = usestate([]);

    // useEffect( () => {
    //     axios.get('js/data.jsos').get( res => { setbars(res.data.bars)})
    // },[])

    // const Barlist = barsss.map( (barline) => {
    //     return
    //     (
    //         <Bar key={barline.bar.id}>
    //             <Bartitle> {barline.bar.title}</Bartitle>
    //             <Barpercent> {barline.bar.percent}</Barpercent>
    //             <Parent>
    //                 <Barspan line ='1'></Barspan>
    //             </Parent>
    //         </Bar>   
    //     )
    // } )





    return(
        <Profilesection>

            <Myprofile>
                <Mytitle>
                    My Profile
                </Mytitle>
                <Mylist>
                    <Myitem> <Myspan> Name  </Myspan> Ahmed Nasr  </Myitem>
                    <Myitem> <Myspan>Birthday </Myspan> 01/08/2001</Myitem>
                    <Myitem> <Myspan> Address</Myspan> Ain shams  </Myitem>
                    <Myitem> <Myspan> Phone </Myspan> 01550093601 </Myitem>
                    <Myitem> <Myspan> Email </Myspan> <Mylink  href='Ahmednasr5066@gmail.com'> Gmail</Mylink></Myitem>
                    <Myitem > <Myspan > Website </Myspan>  <Mylink   href='https://www.linkedin.com/in/ahmed-nasr-277680239/'> Linkedin</Mylink></Myitem>

                </Mylist>

            </Myprofile>



            <Someskills>
                <Skillstitle>
                    Some Skillls
                </Skillstitle>
                <Skillsparagraph>
                    Lorem ipsum is a placeholder text commonly used in publishing and graphic design to demonstrate the visual form of a document or a typeface without relying on meaningful content
                </Skillsparagraph>

              
                {Barlist}



            </Someskills>
        </Profilesection>
    )
} 

export default Profile;