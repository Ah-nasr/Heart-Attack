import React ,{Component} from 'react'
import './style.css';
import { Link } from 'react-router-dom';


// // Get the input element
// const numVesselsInput = document.getElementById('num-vessels');

// // Add an event listener to the input element
// numVesselsInput.addEventListener('input', function() {
//     // Get the entered value
//     const enteredValue = parseInt(numVesselsInput.value);

//     // Check if the entered value is less than 0
//     if (enteredValue < 0) {
//         // Set the input value to 0
//         numVesselsInput.value = 0;
//     }
//     // Check if the entered value is greater than 3
//     else if (enteredValue > 3) {
//         // Set the input value to 3
//         numVesselsInput.value = 3;
//     }
// });



const Add_Patient = () => 
{
    
    return(
    <div className='Add_patient_section'>
        <div className='Container'>
                <h2>
                </h2>
                <form action="/submit-form" method="post" className='Patientform'>
                    <label className='Section_name'> Tabular Data Section</label>



                    <label className='Patientlabel' for="age">Age</label>
                    <input className='Patientinput' type="number" id="age" name="age" placeholder='Patient Age' min='1' max='100' required />


                    <label  className='Patientlabel'for="Sex">Sex</label>
                    <select className='Patientinput' id="sex" name="Sex" required>
                        <option value="" disabled selected>Select 1 for Male  and  0 for Female</option>
                        <option value="typical-angina">1</option>
                        <option value="atypical-angina">0</option>
                    </select>

                    <label  className='Patientlabel'for="chest-pain-type">Chest Pain Type</label>
                    <select className='Patientinput' id="chest-pain-type" name="chest-pain-type" required>
                        <option value="" disabled selected>Select type</option>
                        <option value="typical-angina">Typical Angina</option>
                        <option value="atypical-angina">Atypical Angina</option>
                    </select>


                    <label  className='Patientlabel' for="resting-bp">Resting Blood Pressure</label>
                    <input className='Patientinput' type="number" id="resting-bp" name="resting-bp"  placeholder='The resting blood pressure in mmHg' required />


                    <label className='Patientlabel' for="cholesterol">Cholesterol:</label>
                    <input className='Patientinput' type="number" id="cholesterol" name="cholesterol" placeholder='The serum colesterol level in mg/dl' required/>


                    <label  className='Patientlabel' for="fasting-blood-sugar">Fasting Blood Sugar &nbsp;&gt; 120 mg/dl</label>
                    <select className='Patientinput' id="fasting-blood-sugar" name="fasting-blood-sugar" required>
                    <option value="" disabled selected>Select 1 for True  and  0 for False</option>
                        <option value="typical-angina">1</option>
                        <option value="atypical-angina">0</option>
                    </select>

                    <label className='Patientlabel' for="resting-ecg">Resting Electro-Cardiographic Results:</label>
                    <select className='Patientinput' id="resting-ecg" name="resting-ecg"  required>
                        <option value="" disabled selected>Select type</option>
                        <option value="normal">Normal</option>
                        <option value="abnormal">Abnormal</option>
                    </select>


                    <label className='Patientlabel' for="max-heart-rate">Maximum Heart Rate Achieved:</label>
                    <input className='Patientinput' type="number" id="max-heart-rate" name="max-heart-rate" required min='1'/>


                    <label  className='Patientlabel' for="slope">Slope:</label>
                    <input className='Patientinput' type="number" id="slope" name="slope" required/>

                    <label  className='Patientlabel' for="st-depression">ST Depression:</label>
                    <input className='Patientinput' type="number" id="st-depression" name="st-depression" required/>


                    <label className='Patientlabel' for="num-vessels">Number of Major Vessels Colored by Fluoroscopy:</label>
                    <input className='Patientinput' type="number" id="num-vessels" name="num-vessels" min="0" max="3" required/>


                    <label className='Patientlabel' for="thallium-test">Thallium Stress Test Result:</label>
                    <select className='Patientinput' id="thallium-test" name="thallium-test" required>
                        <option value="" disabled selected>Select type</option>
                        <option value="normal">Normal</option>
                        <option value="reversible-defect">Reversible Defect</option>
                    </select>




                    {/* <Link to='/Result'>
                    <input className='Patientsubmit' type="submit" value="Submit "/>
                    </Link> */}
                {/* </form> */}

                {/* <form action="/submit" method="post" enctype="multipart/form-data" className='Patientform'> */}
                    <label className='Section_name'> ECG Section</label>
                    <label className='Patientlabel' for="ecg-image">Upload ECG Image:</label>
                    <input className='Patientinput' type="file" id="ecg-image" name="ecg-image" accept="image/*" />

                    {/* <input className='Patientsubmit'type="submit" value="Submit "/>
                </form> */}

        
                {/* <form action="/submit" method="post" enctype="multipart/form-data" className='Patientform'> */}
                    <label className='Section_name'> Echocardiography Section</label>
                    <label  className='Patientlabel' for="echo-video">Upload Echocardiography Video:</label>
                    <input  className='Patientinput' type="file" id="echo-video" name="echo-video" accept="video/*" />

                    {/* <input className='Patientsubmit' type="submit" value="Submit "/> */}

                    <Link to='/Result'>
                    <input className='Patientsubmit' type="submit" value="Submit "/>
                    </Link>
                </form>
    </div>
    </div>
    )
} 

export default Add_Patient;