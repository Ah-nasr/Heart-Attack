import React ,{Component} from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const TestView = () => 
{
    
    return(
    <div className='Add_patient_section'>
        <div className='Container'>
                <h2>
                </h2>
                <form action="/submit" method="post" enctype="multipart/form-data" className='Patientform'>
                    <label className='Section_name'> Tabular Data Section</label>



                    <label className='Patientlabel' for="age">Age</label>
                    <label className='viewPatientinput'  > 54</label>


                    <label  className='Patientlabel'for="Sex">Sex</label>
                    <label className='viewPatientinput'  > 1</label>

                    <label  className='Patientlabel'for="chest-pain-type">Chest Pain Type</label>
                    <label className='viewPatientinput'  > Typical Angina</label>


                    <label  className='Patientlabel' for="resting-bp">Resting Blood Pressure</label>
                    <label className='viewPatientinput'  > 124 </label>

                    <label className='Patientlabel' for="cholesterol">Cholesterol:</label>
                    <label className='viewPatientinput'  > 150 </label>

                    <label  className='Patientlabel' for="fasting-blood-sugar">Fasting Blood Sugar &nbsp;&gt; 120 mg/dl</label>
                    <label className='viewPatientinput'  > 123 </label>
                 

                    <label className='Patientlabel' for="resting-ecg">Resting Electro-Cardiographic Results:</label>
                    <label className='viewPatientinput'  > Abnormal </label>


                    <label className='Patientlabel' for="max-heart-rate">Maximum Heart Rate Achieved:</label>
                    <label className='viewPatientinput'  > 60 </label>


                    <label  className='Patientlabel' for="slope">Slope:</label>
                    <label className='viewPatientinput'  > 3 </label>

                    <label  className='Patientlabel' for="st-depression">ST Depression:</label>
                    <label className='viewPatientinput'  > 1 </label>


                    <label className='Patientlabel' for="num-vessels">Number of Major Vessels Colored by Fluoroscopy:</label>
                    <label className='viewPatientinput'  > 2 </label>


                    <label className='Patientlabel' for="thallium-test">Thallium Stress Test Result:</label>
                     <label className='viewPatientinput'  > Reversible Defect </label>







                    <label className='Section_name'> ECG Section</label>
                    <label className='Patientlabel' for="ecg-image">Upload ECG Image:</label>
                    <label className='viewPatientimg'>
                        <img src="" alt="Image"></img>
                       
                         </label>        

         

        

                    <label className='Section_name'> Echocardiography Section</label>
                    <label  className='Patientlabel' for="echo-video">Upload Echocardiography Video:  </label>
                    <label className='viewPatientvideo'>
                     <video  controls width="400">
                        <source  type="video/mp4"/>
                        Your browser does not support the video tag.
                      </video>
                    </label>





                </form>
    </div>
    </div>
    )
} 

export default TestView;