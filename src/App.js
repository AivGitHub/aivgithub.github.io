import React, { Component } from "react";
import { HashRouter as Router, NavLink, Route, Routes } from "react-router-dom";

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
} from "./components";


class App extends Component {
  state = {
    data: [],
    isLoading: true
  };

  constructor(props) {
    super(props);

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

  componentDidMount(){
    this.setData();
  }

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

    return(
      <Router>
        <Navigation brand={data.brand} />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home jsonData={data} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />}>
            <Route path="" element={<Posts />} />
            <Route path=":postSlug" element={<Post />} />
          </Route>
        </Routes>
        <Footer brand={data.brand} />
      </Router>
  )};
}

export default App;
