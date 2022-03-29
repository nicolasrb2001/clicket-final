import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import Clubs from "./components/clubs";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { MarketPlace } from "./MarketPlace";
import { Profile } from "./Profile";


function App() {
  

  
  const adminUser = {
    email: ["louis@gmail.com", "Nico@gmail.com", "Joe@gmail.com", "Dylan@gmail.com", "Awsat@gmail.com", "Elea@gmail.com", "Fabio@gmail.com", "Adam@gmail.com"],
    password: "123", 
  };

  
  const [clubs,setclub]= useState([[{_id: 0, club: "no selection", seller: {_id: 0, name: "no selection"}, UserRating: 0, Day:"no selection", Price: "0"}],[
    {
      _id: "5b21ca3eeb7f6fbccd471898379115",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name: "Adam" },
      UserRating: 4.3,
      Day: "05/03/2022",
      Price: "10.00",
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181328799185",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Awsat" },
      UserRating: 5,
      Day: "06/03/2022",
      Price: "12.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181893y25",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 3,
      Day: "20/03/2022",
      Price: "13.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd4713113785",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 3,
      Day: "22/03/2022",
      Price: "7.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471899",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Joe" },
      UserRating: 4,
      Day: "06/04/2022",
      Price: "10.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471887",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Elea" },
      UserRating: 4,
      Day: "09/04/2022",
      Price: "13.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471888",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Dylan" },
      UserRating: 3,
      Day: "11/03/2022",
      Price: "5.00"
      
    },
  ], [
    {
      _id: "5b21ca3eeb7f6fbccd43918930",
      club: "Second Bridge",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name: "Adam" },
      UserRating: 4.3,
      Day: "05/04/2022",
      Price: "3.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd473785",
      club: "Second Bridge",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Louis" },
      UserRating: 5,
      Day: "06/04/2022",
      Price: "5.00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd47483892",
      club: "Second Bridge",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Joe" },
      UserRating: 4,
      Day: "20/04/2022",
      Price: "9.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd474242",
      club: "Second Bridge",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Joe" },
      UserRating: 4,
      Day: "22/04/2022",
      Price: "4.00"
      
    },
  ],[
    {
      _id: "5b21ca3eeb7f6fbccd4218932",
      club: "Labyrinth ",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name: "Elea" },
      UserRating: 4,
      Day: "05/03/2022",
      Price: "6.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd4712y1u1",
      club: "Labyrinth ",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Dylan" },
      UserRating: 3,
      Day: "06/03/2022",
      Price: "8.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd2373874",
      club: "Labyrinth ",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Fabio" },
      UserRating: 4,
      Day: "20/03/2022",
      Price: "8.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd493827",
      club: "Labyrinth",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 3,
      Day: "22/03/2022",
      Price: "5.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd4746500",
      club: "Labyrinth",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Elea" },
      UserRating: 4,
      Day: "10/04/2022",
      Price: "25.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd47189938",
      club: "Labyrinth",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 3,
      Day: "29/04/2022",
      Price: "80.00"
      
    },
  ], [
    {
      _id: "5b21ca3eeb7f6fbccd4713465",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name: "Adam" },
      UserRating: 4.3,
      Day: "10/04/2022",
      Price: "7.00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd1111111",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Awsat" },
      UserRating: 5,
      Day: "11/04/2022",
      Price: "20.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd47224",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 3,
      Day: "12/04/2022",
      Price: "15.00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471983",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 3,
      Day: "22/04/2022",
      Price: "12.00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd4711545",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Louis" },
      UserRating: 5,
      Day: "20/04/2022",
      Price: "13.00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471233",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Joe" },
      UserRating: 4,
      Day: "25/04/2022",
      Price: "15.00"
    },

  ]]);
    
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const[loggedin, setLoggedin] = useState({loggedin:false});
  const [profiles, setProfile] = useState([
    {
        username: "",
        UserRating: 0,
        ticketsBought: [
            {
                _id: "0",
                club: "no profile loaded",
                Day: "no profile loaded",
              }
        ]
    },
    {
        username: "Nico",
        UserRating: 3,
        ticketsBought: [
            {
                _id: "5b21ca3eeb7f6fbccd471815",
                club: "ZeroZero",
                Day: "30/04/2022",
              },
              {
                _id: "5b21ca3eeb7f6fbccd471822",
                club: "Labyrinth",
                Day: "09/04/2022",
              }, 
              {
                _id: "5b21ca3eeb7f6fbccd471823",
                club: "Score",
                Day: "11/04/2022",
              }
        ]
    },
    {
      username: "Awsat",
      UserRating: 5,
      ticketsBought: [
          {
              _id: "5b21ca3eeb7f6fbccd471816",
              club: "Score",
              Day: "15/04/2022",
            },
            {
              _id: "5b21ca3eeb7f6fbccd471824",
              club: "Second Bridge",
              Day: "16/04/2022",
            }
      ]
  },
  {
    username: "Dylan",
    UserRating: 3,
    ticketsBought: [
        {
            _id: "5b21ca3eeb7f6fbccd471817",
            club: "Labyrinth",
            Day: "10/04/2022",
          },
          {
            _id: "5b21ca3eeb7f6fbccd471830",
            club: "Score",
            Day: "17/04/2022",
          }
    ]
},
{
  username: "Elea",
  UserRating: 4,
  ticketsBought: [
      {
          _id: "5b21ca3eeb7f6fbccd471818",
          club: "ZeroZero",
          Day: "11/04/2022",
        }
  ]
},
{
  username: "Joe",
  UserRating: 4,
  ticketsBought: [
      {
          _id: "5b21ca3eeb7f6fbccd471819",
          club: "Second Bridge",
          Day: "14/04/2022",
        },
        {
          _id: "5b21ca3eeb7f6fbccd471843",
          club: "Score",
          Day: "17/04/2022",
        }
  ]
},
{
  username: "Fabio",
  UserRating: 4,
  ticketsBought: [
      {
          _id: "5b21ca3eeb7f6fbccd471820",
          club: "ZeroZero",
          Day: "15/03/2022",
        }
  ]
},
    {
        username: "Louis",
        UserRating: 5,
        ticketsBought: [
            {
                _id: "5b21ca3eeb7f6fbccd471821",
                club: "Second Bridge",
                Day: "06/03/2022",
              },
              {
                _id: "5b21ca3eeb7f6fbccd471835",
                club: "Second Bridge",
                Day: "10/03/2022",
              }
        ]
    }

  ]);
  
  const Login = (details) => {
    localStorage.setItem("clubs", JSON.stringify(clubs));
    
    localStorage.setItem("prof", JSON.stringify(profiles));
    
    Clubs.username = details.name;
    localStorage.setItem("name", details.name);
    localStorage.setItem("email", details.email);
    
    localStorage.setItem("rating", profiles.find(x=> x.username === details.name).UserRating);
  
    if (
      adminUser.email.includes(details.email) &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");

      setUser({
        name: details.name,
        email: details.email,
      });

      setLoggedin({
        loggedin: false
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  const displayLogin = () => {
   

      return(

        
        <div className='Login'>
          {(loggedin) ? (
            (user.email !== "") ? (
              <div className='welcome'>
                

                <button onClick ={Logout}>Logout</button>
              </div>
            ): (
              <LoginForm Login={Login} error={error}></LoginForm>
            )
          ) : (
            null
          )}
                    
                </div>

      )

  }

  return (
      <div className="App">
        <Navbar setProfile = {setProfile} profiles = {profiles}></Navbar>

        <Router setProfile= {setProfile} profiles = {profiles}>
        
            <Routes setProfile = {setProfile} profiles = {profiles}>
            
              <Route path="/chats" element={<div>Hello this is the Chat</div>} />
              <Route path="/profile" element={<Profile setProfile = {setProfile} profiles = {profiles} />}/>

              <Route path="/MarketPlace" element={<MarketPlace setProfile = {setProfile} profiles = {profiles}></MarketPlace>}/>

              <Route path="/" element={
              
                (user.email !== "") ? (
                  <MarketPlace setProfile = {setProfile} profiles = {profiles}></MarketPlace>

                ): (
                  <div className="Login">
                  <LoginForm Login={Login} error={error} setProfile = {setProfile} profiles = {profiles}></LoginForm>
                  </div>
                )}
                
                />

                
          </Routes>

       </Router>
      </div>
        
  );
}
export default App;
