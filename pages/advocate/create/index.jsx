import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';
import style from './index.module.css'
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

// import React ,{ useState } from "react";
const App = () => {
  let [formValues, setFormValues] = useState({
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
    skills: [],
    education: [],
    total_jobs: 0
  });
  let [Education, setEducation] = useState(
    [
      {
        university: "",
        course: "",
        duration: ""
      },
      {
        university: "",
        course: "",
        duration: ""
      }
    ]
  )
  const handleEducation = (ind, key) => {
    return ((event) => {
      console.log(event.target.value);
      if (ind == 0) {
        setEducation([{ ...Education[0], [key]: event.target.value }, { ...Education[1] }])
      } else {
        setEducation([{ ...Education[0] }, { ...Education[1], [key]: event.target.value }])
      }
    })
  }

  console.log(Education, 'edu')

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newData = { ...formValues, education: Education }
    console.log(newData, 'newdata');

    let data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyer/post`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(newData),
      headers: { 'content-type': 'application/json' }
    })
    data = await data.json()
    if (data.err) {
      toast.error("Try after a while!", { theme: "dark" });

    } else if (data.msg) {
      if (data.msg == 'plg login') {
        toast.error("login first", { theme: "dark" })
        Router.push(`/signinsignup?#`)
      } else if (data.msg == 'sucessfull saved your detail') {
        toast.success("sucessfull saved your detail");
        Router.push(`/advocate/notveryfied`)
      }
    }
    console.log(data);
    // axios.post('http://localhost:3200/lawyer/post', formValues)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  // axios.get('http://localhost:3200/islogdin')
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     // console.error(error);
  //   });


  const handleInputChange = (event) => {
    let { name, value } = event.target;
    value = +value || value
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  let form = new FormData()
  const handle = () => {
  }
  const handleUpload = (state) => {
    return (async function (event) {
      if (event.target.innerText == 'Uploaded') {
        return
      }
      console.log(event.target)
      event.target.innerText = 'uploading...'
      let img = document.getElementById(state).files[0]
      form.append('image', img)

      let data = await fetch(`https://api.imgbb.com/1/upload?key=54c98a65de822e23131448b19d10c535&image`, {
        method: 'POST',
        body: form
      })
      data = await data.json()
      event.target.innerText = 'Uploaded'
      console.log(data, 'll');

      setFormValues({
        ...formValues,
        [state]: data.data.url
      });
      console.log(data, 'll');

    })

  }

  console.log(formValues)
  const selectimage = () => {
    fileInput = document.querySelector('input[name="picture"]');


  }


  return (
    <div className={style.container}>
      <ToastContainer autoClose={2000} />
      <form className={`inputform ${style.form}`} onSubmit={handleSubmit}>
        <h2 className={style.h2} >Please Enter your details:</h2>
        <label className={style.label}>
          Name:
          <input className={style.input} type="text" name="name" value={formValues.name} onChange={handleInputChange} required />
        </label>
        <label className={style.label}>
          Picture:
          <input className={style.input} id='picture' type="file" name="picture" onChange={handle} required />
          <button className={`uploadbtn ${style.button}`} type="button" onClick={handleUpload('picture')}>Upload</button>

        </label>
        <label className={style.label}>
          Document:
          <input className={style.input} id='document' type="file" name="document" required />
          <button className={`uploadbtn ${style.button}`} type="button" onClick={handleUpload('document')} >Upload</button>
        </label >
        <label className={style.label}>
          Role Title:
          <select className={style.select} name="role_title" value={formValues.role_title} onChange={handleInputChange} required>
            <option value="">Select Role Title</option>
            <option value="Property & Civil Matters">Property & Civil Matters</option>
            <option value="Money Recovery">Money Recovery</option>
            <option value="Matrimonial">Matrimonial</option>
            <option value="Buisness Consultation">Buisness Consultation</option>
            <option value="Notices">Notices</option>
            <option value="Agreements & Documentation">Agreements & Documentation</option>
          </select>
        </label>
        <label className={style.label}>
          Location:
          <select className={style.select} name="location" value={formValues.location} onChange={handleInputChange} required>
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
        <label className={style.label}>
          Pricing per hour in Rs:
          <input className={style.input} type="number" name="pricing" value={formValues.pricing} onChange={handleInputChange} required />
        </label>
        <label className={style.label}>
          Short Description:
          <textarea className={style.textarea} name="short_description" value={formValues.short_description} onChange={handleInputChange} required />
        </label>
        <label className={style.label}>
          Long Description:
          <textarea className={style.textarea} name="long_description" value={formValues.long_description} onChange={handleInputChange} required />
        </label>
        <label className={style.label}>
          Fluent Languages:
          <textarea className={style.textarea} name="fluent_language" value={formValues.fluent_language} onChange={handleInputChange} required />

        </label>
        <label className={style.label}>
          Conversational Languages:
          <textarea className={style.textarea} name="conversational_language" value={formValues.conversational_language} onChange={handleInputChange} required />

        </label>
        <label className={style.label}>
          Skills:
          <textarea className={style.textarea} name="skills" value={formValues.skills} onChange={handleInputChange} required />

        </label>
        <h2>Education Details</h2>
        <h3>Last two Degree</h3>
        <h4>First</h4>
        <label className={style.label}>
          University:
          <input className={style.textarea} name="university" value={Education[0].university} onChange={handleEducation(0, 'university')} required />
        </label>
        <label className={style.label}>
          Course:
          <input className={style.textarea} name="course" value={Education[0].course} onChange={handleEducation(0, 'course')} required />
        </label>
        <label className={style.label}>
          Duration:
          <input className={style.textarea} name="duration" value={Education[0].duration} onChange={handleEducation(0, 'duration')} required />
        </label>
        <h4>Second</h4>
        <label className={style.label}>
          University:
          <input className={style.textarea} name="university" value={Education[1].university} onChange={handleEducation(1, 'university')} required />
        </label>
        <label className={style.label}>
          Course:
          <input className={style.textarea} name="course" value={Education[1].course} onChange={handleEducation(1, 'course')} required />
        </label>
        <label className={style.label}>
          Duration:
          <input className={style.textarea} name="duration" value={Education[1].duration} onChange={handleEducation(1, 'duration')} required />
        </label>

        <button className={style.button} type="submit">Submit</button>
      </form>
    </div>
  );
};
export default App;