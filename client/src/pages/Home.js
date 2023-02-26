import { useEffect, useState } from "react"
import axios from 'axios'

export default function Home() {
    const [tickets, setTickets] = useState([])
    const fetchTickets = async () => {
        let res = await axios.get('http://localhost:4000/tickets/list')
        if(res.data instanceof Array) setTickets(res.data)
    }
    useEffect(() => {
        fetchTickets()
    }, [])
    return <div>
        <h4>All Tickets</h4>
     <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Distance</th>
                <th>Fare</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {
                tickets.map((ticket, i) => <tr key={i}>
                    <td>{ticket.id}</td>
                    <td>{ticket.name}</td>
                    <td>{ticket.age}</td>
                    <td>{ticket.distance}</td>
                    <td>{ticket.fare}</td>
                    <td>{ticket.status}</td>
                </tr>)
            }
        </tbody>
     </table>
    </div>
}