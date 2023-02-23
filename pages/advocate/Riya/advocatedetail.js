import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    picture: '',
   document: '',
    role_title: '',
    location: '',
    pricing: '',
    short_description: '',
    long_description: '',
    fluent_language: [],
    conversational_language: [],
    skills:[],
    education:[],
    total_jobs:''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues)
    axios.post('/api/advocates', formValues)
      .then(response => {
        console.log(response);
  
      })
      .catch(error => {
        console.error(error);
    
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  let form = new FormData()
  let fileInput;

  const handleUpload = async () => {

    let file = fileInput.files[0];
    form.append('image', file);

    let data = await fetch(`https://api.imgbb.com/1/upload?key=54c98a65de822e23131448b19d10c535&image`, {
      method: 'POST',
      body: form
    })
    data = await data.json()

    setFormValues({
      ...formValues,
      picture: data.data.url
    });
    // console.log(data, 'll');

  }

const selectimage=()=>{
  fileInput = document.querySelector('input[name="picture"]');


}


  return (
    <form className="inputform"  onSubmit={handleSubmit}>
    <h2>Please Enter your details:</h2>
      <label>
        Name:
        <input type="text" name="name" value={formValues.name} onChange={handleInputChange} required />
      </label>
      <label>
        Picture:
        <input type="file" name="picture" value={formValues.picture} onChange={selectimage} required />
        <button className='uploadbtn' type="button" onClick={handleUpload}>Upload</button>

      </label>
      <label>
        Role Title:
        <select name="role_title" value={formValues.role_title} onChange={handleInputChange} required>
    <option value="">Select Role Title</option>
    <option value="Property & Civil Matters">Property & Civil Matters</option>
    <option value="Money Recovery">Money Recovery</option>
    <option value="Matrimonial">Matrimonial</option>
    <option value="Buisness Consultation">Buisness Consultation</option>
    <option value="Notices">Notices</option>
    <option value="Agreements & Documentation">Agreements & Documentation</option>
  </select>
      </label>
      <label>
        Location:
        <select name="location" value={formValues.location} onChange={handleInputChange} required>
    <option value="">Location</option>
    <option value="Delhi">Delhi</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Bangalore">Bangalore</option>
    <option value="Assam">Assam</option>
    <option value="Jaipur">Jaipur</option>
    <option value="Chennai">Chennai</option>
    <option value="Rishikesh">Rishikesh</option>

  </select>
      </label>
      <label>
        Pricing:
        <input type="number" name="pricing" value={formValues.pricing} onChange={handleInputChange} required />
      </label>
      <label>
        Short Description:
        <textarea name="short_description" value={formValues.short_description} onChange={handleInputChange} required />
      </label>
        <label>
        Long Description:
        <textarea name="long_description" value={formValues.long_description} onChange={handleInputChange} required />
      </label>
      <label>
        Fluent Languages:
        <textarea name="fluent_language" value={formValues.fluent_language} onChange={handleInputChange} required />
       
      </label>
      <label>
        Conversational Languages:
        <textarea name="conversational_language" value={formValues.conversational_language} onChange={handleInputChange} required />
        
      </label>
      <label>
        Skills:
        <textarea name="skills" value={formValues.skills} onChange={handleInputChange} required />
        
      </label>
      <label>
       Education:
        <textarea name="education" value={formValues.education} onChange={handleInputChange} required />
        
      </label>
      <label>
        Total Jobs:
        <input type="number" name="total_jobs" value={formValues.total_jobs} onChange={handleInputChange} required />     
      </label>
      <label>
       Document:
        <input type="file" name="document" value={formValues.document} onChange={handleInputChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default App;