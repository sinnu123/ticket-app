import { useEffect, useState } from "react"
import './AddTicket.css'

export default function AddTicket() {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [distance, setDistance] = useState(0)
    const [fare, setFare] = useState(0)

    useEffect(() => {
        if (age <= 5) {
            setFare(0 * distance)
        } else if (age <= 15) {
            setFare(3 * distance)
        } else if (age >= 60) {
            setFare(5 * distance)
        } else {
            setFare(10 * distance)
        }
    }, [age, distance])

    return <div>
        <h1> Add New Ticket</h1>
        <label>Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <label>Age</label>
        <input type='text' value={age} onChange={(e) => setAge(e.target.value)} />
        <label>Distance</label>
        <input type='text' value={distance} onChange={(e) => setDistance(e.target.value)} />
        <label>Fare</label>
        <input type='text' value={fare} disabled />
        <button>Submit</button>
    </div>
}