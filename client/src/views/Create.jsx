import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const Create = (props) => {
    const [name,setName]=useState('')
    const [url,setUrl]=useState('')
    const [chest,setChest]=useState(0)
    const [phrase,setPhrase] = useState('')
    const [crew,setCrew]=useState('Captain')
    const [isPegLeg,setIsPegLeg]= useState(true)
    const [isEyePatch,setIsEyePatch]= useState(true)
    const [isHookHand,setIsHookHand]= useState(true)
    const [errors,setErrors] = useState([])
    const history = useHistory()

    const onSubmitHandler = e=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/pirates/new",{name,url,chest,phrase,crew,isPegLeg,isEyePatch,isHookHand})
            .then(res=>history.push('/pirates'))
            .catch(err=>{
                const errorResponse = err.response.data.errors
                
                const errorArr = []
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }

  return (
    <div>
        <div style={{margin:"0px 0px 50px 0px"}}>
            <h1>Add Pirate</h1>
            <button ><Link to={'/pirates'}>Crew Board</Link></button>
        </div>
        
        <form onSubmit={onSubmitHandler}>
        {errors.map((err,index) => <p style={{color:'red'}} key={index}>{err}</p>)}
            Pirate Name:
            <input onChange={e=>setName(e.target.value)} value={name}/><br/>
            Image Url:
            <input onChange={e=>setUrl(e.target.value)} value={url}/><br/>
            # of Treasure Chests:
            <input type="number" onChange={e=>setChest(e.target.value)} value={chest}/><br/>
            Pirate Catch Phrase:
            <input onChange={e=>setPhrase(e.target.value)} value={phrase}/><br/>
            Crew Position:
            <select onChange={e=>setCrew(e.target.value)}>
                <option value='Caption'>Captain</option>
                <option value='First Mate'>First Mate</option>
                <option value='Quarter Master'>Quarter Master</option>
                <option value='Boatswain'>Boatswain</option>
                <option value='Powder Monkey'>Powder Monkey</option>
            </select>
            <br/>
            <input type="checkbox" checked={isPegLeg} onChange={e=>setIsPegLeg(e.target.checked)}/><label>Peg Leg</label>
            <br/>
            <input type="checkbox" checked={isEyePatch} onChange={e=>setIsEyePatch(e.target.checked)}/><label>Eye Patch</label>
            <br/>
            <input type="checkbox" checked={isHookHand} onChange={e=>setIsHookHand(e.target.checked)}/><label>Hook Hand</label>

            <button type="submit">Add Priate</button>
        </form>

    </div>
  )
}

export default Create