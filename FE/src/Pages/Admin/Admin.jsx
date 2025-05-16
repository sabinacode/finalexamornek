import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function Admin() {
  const [myData, setMyData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortByProperty,setsortByProperty] = useState({
    name: "",
    order: true,
  });
  const URL = "http://localhost:3000/user";
  async function getData(url) {
    const res = await axios.get(url);
    setMyData(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    getData(URL);
  }, []);
  async function deleteByid(url, id) {
    const res = await axios.delete(url+"/"+id);
    getData(URL);
  }

  return (
    <>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        value={search}
      />
      <button onClick={()=>setsortByProperty({name:"name",order:true})}>A-z</button>
      <button onClick={()=>setsortByProperty({name:"name",order:false})}>Z-a</button>
      <table border={1} style={{ width: "1000px" }}>
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {myData
            .toSorted((a, b) =>
              sortByProperty.order
                ? a[sortByProperty.name] > b[sortByProperty.name]
                  ? 1
                  : b[sortByProperty.name] > a[sortByProperty.name]
                  ? -1
                  : 0
                : a[sortByProperty.name] < b[sortByProperty.name]
                ? 1
                : b[sortByProperty.name] < a[sortByProperty.name]
                ? -1
                : 0
            )
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <img src={item.image} style={{ width: "150px" }} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => deleteByid(URL, item._id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
