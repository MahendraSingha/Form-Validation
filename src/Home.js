import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Home() {

    const navigate = useNavigate()

    const [formData, setFormdata] = useState({
        name: '',
        email: ''
    })
    // console.log('mmm', formData)

   
    // console.log(Array.isArray(parsedInitialData), 'iiii')
    // const arr = Array.of(parsedInitialData)


    // const [personDetail, setPersonDetail] = useState([])
    
    
    function handleSubmit(e){
        e.preventDefault();
        // personDetail.push(formData)
         const setInitialData = JSON.parse(localStorage.getItem('key')) || []
        //  console.log(setInitialData,'setInitialData')
         setInitialData.push(formData)
         localStorage.setItem('key', JSON.stringify(setInitialData))
        // setPersonDetail(personDetail.push(formData))
        // console.log('pp', personDetail)
        setFormdata({
            name: '',
            email: ''
        })
    }

    function handleChange(e){
        setFormdata({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

   
  return (
    <div>
        <div>
            <Link to="/dashboard">Users</Link>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='name'>Name: </label>
            <input id='name' type='text' name='name' placeholder='name' value={formData.name} onChange={(e) => handleChange(e)} autoComplete='off' />
            </div>
            <br/>

            <div>
            <label htmlFor='email'>Email: </label>
            <input id='email' type='email' name='email' placeholder='email' value={formData.email} onChange={(e) => handleChange(e)} autoComplete='off' />
            </div>
            <br/><br/>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form><br/><br/>
        
    </div>
  )
}

export default Home