import React, { Component } from 'react'
import logo from '../components/public/image/biopicimg.jpg';


class Banner extends Component {
    state = {
        change: false,
        
    
    }
    
    render() {
        return (
            <div>
                <section className="container-banner">

                <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                <h1> {localStorage.getItem("name")} </h1>
                <h5> User Rating: {localStorage.getItem("rating")}</h5>
                <p id="paragarph1"><br/>
                {localStorage.getItem("email")}
                <br/> <br/> Location: Bath </p>
                <button>Change details</button>
            

                </section>
                <h1 >My Tickets</h1>
                <table className="table">
                <thead className="table-head">
                <tr className="table-columns">
                    <th className="table-column">Club</th>
                    <th className="table-column">Date</th>
                    <th className="table-column">ID</th>
                </tr>
                </thead>
                <tbody className="all-table-content">
                {JSON.parse(localStorage.getItem("prof"))[JSON.parse(localStorage.getItem("prof")).findIndex(x => x.username === localStorage.getItem("name") )].ticketsBought.map((ticket) => (
                    <tr>
                    <td className="table-content">{ticket.club}</td>
                    <td className="table-content">{ticket.Day}</td>
                    <td className="table-content">{ticket._id}</td>
            
                    </tr>
                ))}
                </tbody>
      </table>
                
            </div>

        )
    }
}

export default Banner;


