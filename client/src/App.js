import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AddTicket from "./pages/AddTicket";
import Home from "./pages/Home";

function App() {
  const [active, setActive] = useState("/")
  const arr = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/add-ticket",
      name: "New Ticket"
    }
  ];

  return (
    <BrowserRouter>
    <div>
        <p className="indianrailway">Indian Railway Service</p>    
      <nav>
        <ul className="nav">
          {
            arr.map((item, i) => <li onClick={() => {
              setActive(item.path)
            }} key={i} className={active == item.path ? "active" : ""}>
            <Link to={item.path}>{item.name}</Link>
            </li>)
          }
        </ul>
      </nav>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/add-ticket" element={<AddTicket />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}



export default  App;
