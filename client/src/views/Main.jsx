import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Main = (props) => {
    const [pirates,setPirates]=useState([])
    const [loaded,setLoaded]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates")
        .then(res=>{
            // console.log(res.data);
            setPirates(res.data)
            setLoaded(true)
        })
        .catch(err=>console.log(err))
    },[])

    const Deletehandler = (id) =>{
        axios.delete('http://localhost:8000/api/pirates/'+id)
            .then(res => {
                const new_list = pirates.filter(pirate=> pirate._id !== id)
                setPirates([...new_list])
                console.log(res)
            })
            .catch(err=>console.log(err))
    }
  
    return (
    <div >
        <div>
            <h1>Pirate Crew</h1>
            <button><Link to={'/pirate/new'}>Add Pirate</Link></button>
        </div>
        {pirates.map((pirate)=>{
            return(
                <div key={pirate._id} style={{backgroundColor:"gray",width:"50%",marginLeft:"400px"}}>
                    <h3>{pirate.name}</h3>
                    <img src={pirate.url} style={{height:"50px"}}/>
                    <button style={{margin:"10px"}}><Link to={'/pirate/'+pirate._id}>View Pirate</Link></button>
                    <button style={{margin:"10px"}} onClick={()=>Deletehandler(pirate._id)}>Walk the Plank</button>

                </div>
            )
        })}
    </div>
  )
}

export default Main