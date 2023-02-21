// import { useEffect, useState } from "react";
// import axios from "axios"

// function App(){
//     const [name, setName] = useState('')
//     const [age, setAge] = useState(0)
//     const [distance, setDistance] = useState(0)
//     const [fare, setFare] = useState(0)
//     const [tickets, setTickets] = useState([])
//     const [responseMessage, setresponseMessage] = useState('')
//  const getTickets = async () => {
//     const t = await axios.get('http://localhost:4000/tickets/list');
//     if(t.data instanceof Array){
//         setTickets(t.data);
//     }
//  }
//  useEffect(() => {
//     getTickets();
//  },[])
//  useEffect(() => {
//     if (age <= 5){
//         setFare(0 * distance)
//     }else if (age <= 15) {
//         setFare (3 * distance)
//     }else if (age >= 60){
//         setFare(5 * distance)
//     }else {
//         setFare(10 * distance)
//     }
//  }, [age,distance]) 
//  return(
//     <div>
//     <h2>Tickets</h2>
//     <p>Fare:{fare}</p>
//     <p>{responseMessage}</p>
//     <label>Name: </label>
//     <input type="text" value={name} onChange={(e) => setName(e.target.value)}/><br/> <br/>
//     <label>Age: </label>
//     <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/><br/> <br/>
//     <label>Distance: </label>
//     <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)}/><br/> <br/>
//     <button onClick={async () => {
//         const res = await axios.post('http://localhost:4000/ticket/new',{
//             name: name,
//             age: age,
//             fare: fare,
//             distance: distance
//         })
//         setresponseMessage(res.data)
//         getTickets();
//     }}>Submit</button>
//     <br/>
//     <br/>
//     <table>
//     <thead>
//         <tr>
//             <th>iD</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Distance</th>
//             <th>Fare</th>
//             <th>Status</th>
//         </tr>
//     </thead>
//     <tbody>
//         {
//             tickets.map((ticket, i) =><tr>
//                 <td>{ticket.id}</td>
//                 <td>{ticket.name}</td>
//                 <td>{ticket.age}</td>
//                 <td>{ticket.distance}</td>
//                 <td>{ticket.fare}</td>
//                 <td>{ticket.status}</td>
//             </tr> )
//         }
//     </tbody>
//     </table>
//     </div>
//  );
// }




import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [distance, setDistance] = useState(0)
  const [fare, setFare] = useState(0)
  const [tickets, setTickets] = useState([]);
  const [responseMessage, setresponseMessage] = useState('')
  const getTickets = async () => {
    const t = await axios.get('http://localhost:4000/tickets/list');
    if (t.data instanceof Array) {
      setTickets(t.data);
    }
  }
  useEffect(() => {
    getTickets();
  }, [])
  useEffect(() => {
    if (age <= 5) {
      setFare(0 * distance)
    } else if (age <= 15) {
      setFare(3 * distance)
    }
    else if (age >= 60) {
      setFare(5 * distance)
    } else {
      setFare(10 * distance)
    }
  }, [age, distance])
  return (
    <div>
        <p className="indianrailway">Indian Railway Service</p>
      <h1 className="tickets">Train Ticket Booking</h1>
      <h4>Fare:{fare}</h4>
      <h2 className="h2res">{responseMessage} </h2>
      <label for="name" >Name:</label>
      <input id="name" className="inputname" type="text" placeholder="Enter Your Name..." value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
      <label for="age">Age:</label>
      <input id="age" className="inputage" type="text" placeholder="Enter Your Age..." value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
      <label for="distance">Distance:</label>
      <input id="distance" className="inputdis" type="text" placeholder="Enter Your Distance..." value={distance} onChange={(e) => setDistance(e.target.value)} /><br /><br />
      {/* <div align="center"> */}
      <button onClick={async () => {
          const res = await axios.post('http://localhost:4000/tickets/new', {
              name: name,
              age: age,
              fare: fare,
              distance: distance
            })
            setresponseMessage(res.data)
            getTickets();
        }}>SUBMIT</button>
        {/* </div> */}
    
      <br />
      <br />
      <table className="tabletc">
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
            tickets.map((ticket, i) => <tr>
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
  );
}



export default  App;
