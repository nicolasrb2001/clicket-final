import React, { Component } from "react";

import "./Clubs.css"

class Clubs extends Component {
  state = {
    choice: 0,
    bool: true,
    
  };
  sellTicket =() =>{
    let z = 0;
    let x = 1;
    while(true){
      x = prompt("what club are you selling tickets for? Enter the name of one of the clubs displayed as they are ie ZeroZero");
      if(x === "ZeroZero"){
        z = 1;
        break;
      }else{
        if(x=== "Second Bridge"){
          z = 2;
          break;
        }else{
          if(x=== "Labyrinth"){
            z = 3;
            break;

          }else{
            if(x=== "Score"){
              z = 4;
              break;
            }
          }
        }
      }
    }
    let date = 1;
    while(true){
      date = prompt("what is the date? Needs to be of the format MM/DD/YYYY and exist in the calendar");
      if(Date.parse(date) > 0){
          break;
      }else{

      }
    }
    let price = prompt("what price are you selling it for?");
    this.t.Price = price;
    this.t._id = Date.now().toString();
    this.t.club = x;
    this.t.Day = date.substring(3,5) + "/" + date.substring(0,2) + "/" + date.substring(6,10);
    let y = JSON.parse(localStorage.getItem("clubs"));
    let a = y[z]; 
    a.push(this.t);
    y[z] = a;
    localStorage.setItem("clubs", JSON.stringify(y));
    this.setState({bool: !this.state.bool});

  }
  
  delete = (ticket) =>{
    let y = JSON.parse(localStorage.getItem("clubs"));
    let x = y[this.state.choice]; 
    let filtered = x.filter(function(tic){return ticket._id !== tic._id});
    y[this.state.choice] = filtered;
    localStorage.setItem("clubs", JSON.stringify(y)); 
    this.setState({bool: !this.state.bool});
    
  }

  t =  {
      _id: "",
      club: "",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name: localStorage.getItem("name") },
      UserRating: localStorage.getItem("rating"),
      Day: "",
      Price: ""
      
    };
  

  
  
  addTicketToProfile(ticket, name) {
    
    let x = JSON.parse(localStorage.getItem("prof"));
    let index= x.findIndex(y => y.username === name) ;
    x[index].ticketsBought.push({_id: ticket._id, club: ticket.club, Day: ticket.Day});
    
   
    return x;
       
}
  
  
 
  handleChange = number => {
  
    this.setState({choice: number})
  };
  
  
  
  BuyTicket = (ticket) => {
    if (ticket._id === 0){
      return
    }
    let x = prompt("if you want to buy the ticket for " + ticket.club + " from " + ticket.seller.name + " on the  " + ticket.Day + " for £"+ ticket.Price + " type yes, otherwise no")
    if(x === "chat"){
      //chat with seller
    }
    if (x === "yes"){
      localStorage.setItem("prof", JSON.stringify(this.addTicketToProfile(ticket, localStorage.getItem("name"))));
      if(this.state.choice === 1){
        this.delete(ticket)
      }
      if(this.state.choice === 2){
        this.delete(ticket)
      }
      if(this.state.choice === 3){
        this.delete(ticket)
      }
      if(this.state.choice === 4){
        this.delete(ticket)
      }
      
    }

  };
  
  render() {
    
    return (
      
      <div >
        <div className="club-options">
          <span className="club-button">Click on the club that you are searching tickets for: </span>
          <button className = "club-button" onClick={() => this.handleChange(1)}>
            ZeroZero
          </button>
          <button className = "club-button" onClick={() => this.handleChange(2)}>
            Second Bridge
          </button>
          <button className = "club-button" onClick={() => this.handleChange(3)}>
            Labyrinth
          </button>
          <button className = "club-button" onClick={() => this.handleChange(4)}>
            Score
          </button>
        
        </div>
        <div>
          <button className = "club-button" onClick = {() => this.sellTicket()}>Press if you want to sell a ticket</button>
        </div>


      <table className="table">
        <thead className="table-head">
          <tr className="table-columns">
            <th className="table-column" onClick ={()=> console.log(JSON.parse(localStorage.getItem("clubs")))}>Club</th>
            <th className="table-column">Seller</th>
            <th className="table-column">Date</th>
            <th className="table-column">User Rating</th>
            <th className="table-column">Ticket Price</th>
          </tr>
        </thead>
        
        <tbody className="all-table-content">
          {JSON.parse(localStorage.getItem("clubs"))[this.state.choice].map((ticket) => (
            <tr onClick= {() => this.BuyTicket(ticket)}>
              <td className="table-content">{ticket.club}</td>
              <td className="table-content-seller">{ticket.seller.name}</td>
              <td className="table-content">{ticket.Day}</td>
              <td className="table-content">{ticket.UserRating}</td>
              <td className="table-content">{ticket.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
          
         
    );
  }
}

export default Clubs;
