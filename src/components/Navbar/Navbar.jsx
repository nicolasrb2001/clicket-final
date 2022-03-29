import React, { Component } from "react";
import { Menuitems } from "./Menuitems";
import "./Navbar.css";

class Navbar extends Component {
  state = { 
    clicked: false,
    
  };
  
  
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="app-Logo">
          Clicket<i class="fa-solid fa-wave-square"></i>
        </h1>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url} key = {index} >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
