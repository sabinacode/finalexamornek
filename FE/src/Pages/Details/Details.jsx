import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
    const URL = "http://localhost:3000/user";
    const [detail, setDetail] = useState([])
    const {id} = useParams()
   async function getById(url,id) {
       const res=await axios.get(url+"/"+id)
       setDetail(res.data)
       
    }
    useEffect(() => {
   getById(URL,id)
    }, [])
    
  return (
    <>  <img className="image" src={detail.image} />
          <h3>{detail.name}</h3>
          <p>{detail.price}</p></>
    
  )
}

export default Details