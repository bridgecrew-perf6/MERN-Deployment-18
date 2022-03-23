import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ViewOne = (props) => {
    const {id} = useParams()
    const [pirate,setPirate]=useState({})

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates/'+id)
        .then(res=>setPirate(res.data))
        .catch(err=>console.log(err))
    },[id])

    const onClickHandler1 = (id,isPegLeg_prev)=>{
        let isPegLeg = !isPegLeg_prev
        
        axios.put('http://localhost:8000/api/pirates/update/'+id,{isPegLeg})
            .then(res=>{
                const new_pirate = {...pirate}
                new_pirate.isPegLeg = isPegLeg
                setPirate(new_pirate)
            })
    }

    const onClickHandler2 = (id,isEyePatch_prev)=>{
        let isEyePatch = !isEyePatch_prev
        
        axios.put('http://localhost:8000/api/pirates/update/'+id,{isEyePatch})
            .then(res=>{
                const new_pirate = {...pirate}
                new_pirate.isEyePatch = isEyePatch
                setPirate(new_pirate)
            })
    }

    const onClickHandler3 = (id,isHookHand_prev)=>{
        let isHookHand = !isHookHand_prev
        
        axios.put('http://localhost:8000/api/pirates/update/'+id,{isHookHand})
            .then(res=>{
                const new_pirate = {...pirate}
                new_pirate.isHookHand = isHookHand
                setPirate(new_pirate)
            })
    }

  return (
    <div>
        <h1>{pirate.name}</h1>
        <img src={pirate.url} style={{height:"200px"}}/>
        <h2>About</h2>
        Position:{pirate.crew} <br/>
        Treasures:{pirate.chest} <br/>
        Peg Leg:{pirate.isPegLeg? <>Yes <button onClick={()=>onClickHandler1(pirate._id,pirate.isPegLeg)}>No</button></>:<>No <button onClick={()=>onClickHandler1(pirate._id,pirate.isPegLeg)}>Yes</button></> } <br/>
        Eye Patch:{pirate.isEyePatch? <>Yes <button onClick={()=>onClickHandler2(pirate._id,pirate.isEyePatch)}>No</button></>:<>No <button onClick={()=>onClickHandler2(pirate._id,pirate.isEyePatch)}>Yes</button></>} <br/>
        Hook Hand:{pirate.isHookHand? <>Yes <button onClick={()=>onClickHandler3(pirate._id,pirate.isHookHand)}>No</button></>:<>No <button onClick={()=>onClickHandler3(pirate._id,pirate.isHookHand)}>Yes</button></>} <br/>
        
        <Link to={"/pirates"}> Home </Link>
    </div>
  )
}

export default ViewOne