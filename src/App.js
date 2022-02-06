import React, { Component } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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

    var systemData = {
      "version": data.version,
      "designed_by": data.designed_by,
      "brand": data.brand
    }

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

    return(
      <Router>
        <Navigation brand={data.brand} />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home jsonData={data} />} />
          <Route
            path="/contacts"
            element={<Contacts contacts={data.contacts}
            socialNetworks={data.social_networks}/>}
          />
          <Route path="/blog" element={<Blog />}>
            <Route path="" element={<Posts />} />
            <Route path=":slug" element={<Post />} />
          </Route>
          <Route path="/about" element={<About systemData={systemData} />} />
        </Routes>
        <Footer brand={data.brand} version={data.version}/>
      </Router>
  )};
}

export default App;
