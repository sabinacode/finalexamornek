import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const URL = "http://localhost:3000/user";
function OurProducts() {
  const [myData, setMyData] = useState([]);
  const URL = "http://localhost:3000/user";
  async function getData(url) {
    const res = await axios.get(url);
    setMyData(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    getData(URL);
  }, []);

  return (
   <> 

    <div className="cards">
      {myData.map((item) => (
        <div className="card" key={item._id}>
          <img className="image" src={item.image} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
               <Link to={"detail/"+item._id} ><button>detail</button></Link>
        </div>
      ))}
    </div>
   </>
  
  );
}

export default OurProducts;
