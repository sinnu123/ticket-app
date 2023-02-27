import { useEffect, useState } from "react"
import axios from 'axios'
import { API } from "../constants/path"

export default function Home() {
    const [tickets, setTickets] = useState([])
    const statuses = [
        'pending',
        'accepted',
        'rejected',
        'cancelled'
    ]
    const fetchTickets = async () => {
        let res = await axios.get(`${API}/list`)
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
                <th>Action</th>
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
                    <td>
                        <select onChange={async (e) => {
                            let res = await axios.post(`${API}/edit/${ticket.id}`, {
                                status: e.target.value
                            })
                            alert(res.data)
                        }}>
                            {
                                statuses.map((status, j) => <option key={j} value={status} selected={status == ticket.status}>{status}</option>)
                            }
                        </select>
                    </td>
                    <td>
                        <button onClick={async () => {
                            let res = await axios.get(`${API}/delete/${ticket.id}`);
                            alert(res.data)
                            setTickets(tickets.filter(tkt => tkt.id != ticket.id))
                        }} style={{
                            background: 'red'
                        }}>Delete</button>
                    </td>
                </tr>)
            }
        </tbody>
     </table>
    </div>
}