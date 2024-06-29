import React ,{ useState,useEffect,Component} from 'react'
import {Hoome ,Container,Homebtn,Homedesc,Homeinfo,Hometitle,Span } from './style.js'
import { Link } from 'react-router-dom';
import './Hstyle.css';
import axios from 'axios';
const Home = () => {

   // const [pnt , setpnt] = useState([]);
   // useEffect( () => {
   //    axios.get('js/data.json').then( res=> {setpnt(res.data.patients)})
   // },[]);

   // const Pntlist = pnt.map( (pntitem) =>{
   //    return(
   //             <tr key={pntitem.id}>
   //                <th> {pntitem.patient}</th>
   //                <td class="button-group">
   //                <Link  to='/Add_Patient'>
   //                   <button className='Addbutton'>Add</button>
   //                </Link>
   //                   <button className='Removebutton'>Remove</button>
   //                <Link to='/View'>
   //                   <button className='Viewbutton'>View</button>
   //                </Link>   
   //                </td>
   //             </tr>
   //    )
   // })
  

   // return(
      
   //  <Hoome>
   //       <Container>
   //          <Hometitle> Hello Doctor</Hometitle>
   //          <table>
   //             <thead>
   //                <tr>
   //                   <th colspan="4"  className='table-name '>patient List</th>
   //                </tr>
   //             </thead>
   //             <tbody>
   //                {Pntlist}
   //             </tbody>
   //          </table>
   //          <Link  to='/New_Patient'>
   //          <button className='Newbutton'>
   //             New Patient
   //          </button>
   //          </Link>
   //       </Container>

 




   // const [patients, setPatients] = useState(["patient1", "patient2", "patient3", "patient4", "patient5", "patient6", "patient7", "patient8", "patient9", "patient10", "patient11", "patient12"]);
   const [pnt, setPnt] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const pageSize = 5;


   const [showOptions, setShowOptions] = useState(false);
   const [selectedOption, setSelectedOption] = useState('');
 
   const toggleOptions = () => {
     setShowOptions(!showOptions);
   };
 
   const handleOptionClick = (option) => {
     setSelectedOption(option);
     setShowOptions(false);
     // Here you can add your logic for filtering based on the selected option
   };
 


   useEffect(() => {
       axios.get('js/data.json').then(res => {
           setPnt(res.data.patients);
       });
   }, []);

   const renderTable = () => {
       const start = (currentPage - 1) * pageSize;
       const end = start + pageSize;
       const paddedEnd = Math.max(end, pnt.length % pageSize); // Ensure we include empty rows if needed
       const rows = [];

       for (let i = start; i < paddedEnd; i++) {
           if (i < pnt.length) {
               rows.push(
                   <tr key={i}>
                       <th>{pnt[i].patient}</th>
                       <td className="button-group">
                        <Link  to='/Add_Patient'>
                           <button className='Addbutton'>Add</button>
                        </Link>
                           <button className='Removebutton'>Remove</button>
                        <Link to='/View'>
                           <button className='Viewbutton'>View</button>
                        </Link> 
                       </td>
                   </tr>
               );
           } 
           
           else {

               rows.push(
                   <tr key={i}>
                       <th className='empty'></th>
                       <td className=" empty"></td>
                   </tr>
               );
           }
       }

       return rows;
   };

  
   const prevPage = () => {
       if (currentPage > 1) {
           setCurrentPage(currentPage - 1);
       }
   };

   const nextPage = () => {
       const totalPages = Math.ceil(pnt.length / pageSize);
       if (currentPage < totalPages) {
           setCurrentPage(currentPage + 1);
       }
   };


   return (


      <Hoome>
         <Container>
            <Hometitle> Hello Doctor</Hometitle>
            <div className='Filter_container'>
            <i class="fa fa-filter  Ic" aria-hidden="true" onClick={toggleOptions}> Filter</i>
            {showOptions && (
               <table className="options-list">
               <td className='option' onClick={() => handleOptionClick('name')}>Name</td>
               <td className='option' onClick={() => handleOptionClick('date')}>Date</td>
               <td className='option' onClick={() => handleOptionClick('severity')}>Severity</td>
            </table>
            )}
            </div>

            < table  className='main-table '>
               <thead>
                  <tr>
                    

                     <th colspan="4"  className='table-name '>patient List</th>

                  </tr>
               </thead>
               <tbody>
               {renderTable()}
               </tbody>
   
            </table>

            <div className="button-group2">
                  <button className="prev-button" onClick={prevPage}>Previous</button>
                  <button className="next-button" onClick={nextPage}>Next</button>
            </div>
            <Link  to='/New_Patient'>
            <button className='Newbutton'>
               New Patient
            </button>
            </Link>
 
         </Container>
      </Hoome>


   );









   
} 

export default Home;