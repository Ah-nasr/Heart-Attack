import React ,{Component} from 'react'
import './style.css';
import Add_Patient from '../Add_Patient'
import { BrowserRouter , Routes,Route } from 'react-router-dom';
const New_Patient = () => 
{
        return(
            
            <div className='New_Patient_Form'>
                  <form   className='Patientform' id='Patientdataform'>
                        <label className='Section_name ' id='newlabel'> Personal Information</label>
                        <label className='Patientlabel' for="NPatientname">Name</label>
                        <input className='Patientinput pp'  type="text" id="NPatientname" name="Name"  placeholder='Patient Name'required/>
    
                        <label className='Patientlabel' for="NPatientnumber">Phone Number</label>
                        <input className='Patientinput pp' type="tel" id="NPatientnumber" name="Phonenumber"  placeholder='Patient Number'required/>
    
    
                        <label className='Patientlabel' for="Nbirthdate">Birthdate</label>
                        <input className='Patientinput pp' type="date" id="Nbirthdate" name="Birthdate" placeholder='Patient Birthdate'  required />
    
                        <label className='Patientlabel' for="NPatientAddress">Address</label>
                        <input className='Patientinput pp' type="text" id="NPatientAddress" name="Address"  placeholder='Patient Address'required/>
                            
                        {/* <input className='Patientsubmit' type="submit" value="Submit "/> */}
                    </form>
         <Add_Patient/>
                  








                   
        </div>
        )
    
    
} 

export default New_Patient;