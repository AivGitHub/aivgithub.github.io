import React, { Component } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faLinkedin, faGithub
} from '@fortawesome/free-brands-svg-icons';

import "./App.css";
import {
  Navigation,
  Footer,
  Home,
  Contacts,
  Blog,
  Posts,
  Post,
  NotFound,
  About,
  Background,
} from "./components";


class App extends Component {
  state = {
    data: [],
    isLoading: true
  };

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.setData();
  }

  setData = () => {
//    For testing
//    setTimeout(() => {
//
//    fetch('/database.json', {})
//      .then(dataJSON => dataJSON.json())
//      .then(dataJSON => {
//        this.setState({ data: dataJSON.main, isLoading: false });
//      })
//      .catch(e => console.log(e));
//
//    }, 3000);

    fetch('/database.json', {})
      .then(dataJSON => dataJSON.json())
      .then(dataJSON => {
        this.setState({ data: dataJSON.main, isLoading: false });
      })
      .catch(e => console.log(e));

  };

  render() {
    const { data, isLoading } = this.state;

    // Dirty hack
    if (isLoading) {
      return(
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <h1>Loading..</h1>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    }

    var iconsMap = {
      'linkedin': faLinkedin,
      'github': faGithub
    }

   var socialNetworks = data.social_networks.map(function(socialNetwork, i){
     return <span className="ms-4" key={"outer-navigation-map" + i}>
         <a href={socialNetwork.url} target="_blank">
           <FontAwesomeIcon icon={iconsMap[socialNetwork.brand]} />
         </a>
       </span>
     });

    var systemData = {
      "version": data.version,
      "designed_by": data.designed_by,
      "brand": data.brand
    }

    var footerData = {
      "socialNetworks": socialNetworks,
      "version": data.version,
      "brand": data.brand
    }

    var contactsData = {
      "contacts": data.contacts,
      "socialNetworks": socialNetworks
    }

    var navigationData = {
      "socialNetworks": socialNetworks,
      "brand": data.brand,
    }

    return(
      <Router>
        <Navigation navigationData={navigationData} />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home jsonData={data} />} />
          <Route
            path="/contacts"
            element={<Contacts contactsData={contactsData} />}
          />
          <Route path="/blog" element={<Blog />}>
            <Route path="" element={<Posts />} />
            <Route path=":slug" element={<Post />} />
          </Route>
          <Route path="/about" element={<About systemData={systemData} />} />
        </Routes>
        <Footer footerData={footerData}/>
      </Router>
  )};
}

export default App;
