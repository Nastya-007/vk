import React, { Component } from "react";
import Logo from "../logo/logo";
import HomePage from "../home-page/home-page";
import MyContacts from "../my-contacts-list/my-contacts-list";
import Admin from "../admin/admin";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ListItem from "../contact/contact";

export default class App extends Component {
  
    
      render() {
        return (
        <Router>
           <div className="start-vk">
        <Logo/>
        <Route path="/"
        render = {()=> <HomePage/> }
        exact
        />
       
        <Route path="/my" component={MyContacts}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/list" component={ListItem}/>
        </div>
      </Router>
    )

  }
}
