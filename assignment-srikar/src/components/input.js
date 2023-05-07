import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
const Flight = () => {

    const start = useRef()
    const dest = useRef()
    const [obj,setobj] = useState({_id:"",
                                   start:"",
                                   end:"",
                                   price:[]})

    const submithandler = (e) => {
        e.preventDefault()
        console.log(start.current.value);
        console.log(dest.current.value);
        if(start.current.value === dest.current.value)
        {
            alert("Oops! You have selected the same place as your starting point and destination")
        }
        else
        {
            axios.post("http://localhost:5000/showprice", {
                start : start.current.value,
                dest : dest.current.value
            })
            .then((res) => {
                console.log(res.data[0]);
                setobj(res.data[0])
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
  return (
    <>
    <form onSubmit={submithandler}>
        <label for="start">Choose your starting point:</label>
            <select name="start" id="start" ref={start}>
                <option value="Delhi">Delhi</option>6
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kerela">Kerela</option>
                <option value="Chennai">Chennai</option>
            </select>
            <br></br>
        <label for="dest">Choose your destination:</label>
            <select name="start" id="start" ref={dest}>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kerela">Kerela</option>
                <option value="Chennai">Chennai</option>
            </select>
            <br></br>
            <input type="date" id="start" name="trip-start" value="2023-05-05" min="2013-05-05" max="2033-05-05" />
            <br></br>
        <input type='submit' value="Submit" />

        <div>
            <li>Your ticket price for indigo is {obj.price[0]}</li>
            <li>Your ticket price for airasia is {obj.price[1]}</li>
            <li>Your ticket price for vistara is {obj.price[2]}</li>
        </div>
    </form>
    </>
  )
}

export default Flight;