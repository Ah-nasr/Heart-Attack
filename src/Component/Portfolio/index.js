import React ,{useState ,useEffect} from 'react'
import {Portsection , Porttitle ,Portlist , Portitem ,Span ,Images ,Cups, Overlay ,Box} from './style.js'
import axios from 'axios';

const Portfolio = () => {
    
    const[ photos , setimages] = useState([]);

    useEffect( () => {
        axios.get('js/data.json').then(res => { setimages(res.data.portfolio) } )
    } ,[])

    const portimages = photos.map( (imageitem) =>
    {
      return (
             <Cups key={imageitem.id}> 
                 {/* <Images src={imageitem.image}></Images> */}
                 <Images src={imageitem.image} alt="no image"/>
                 <Overlay>
                     <Span>
                         Show Image
                     </Span>
                 </Overlay>
             </Cups>
      )
    } )

   






    return(
        <Portsection>
            <Porttitle>
                My Portfolio
            </Porttitle>
            <Portlist>
                <Portitem active > All</Portitem>
                <Portitem> HTML</Portitem>
                <Portitem> Photoshop</Portitem>
                <Portitem> Wordpress</Portitem>
                <Portitem> Mopile</Portitem>
            </Portlist>

            <Box>
                {portimages}
              
            </Box>
        </Portsection>
    )
    }
 

export default Portfolio;