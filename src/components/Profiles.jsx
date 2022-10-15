import React from 'react'
import Profile from './Profile'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Profiles = () => {
    let URL = 'http://localhost:5000/profiles';
    let [data,setData] = useState([])

    useEffect(() => {
        async function demo(){
            let res = await axios.get(URL)
            setData(res.data)
        }
        demo()
    }, []);
  return (
    <div className='home'>
        {
            data.map(a => (
                <Profile data={a} key={a.id}/>
            ))
        }
    </div>
  )
}

export default Profiles
