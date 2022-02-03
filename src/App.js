import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./App.css";
import {
  Navigation,
  Footer,
  Home,
  Contact,
  Blog,
  Posts,
  Post,
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

    if (isLoading) {
      // Dirty hack
      return null;
    }

    return(
      <Router>
        <Navigation brand={data.brand} />
        <Routes>
          <Route path="/" element={<Home jsonData={data} />} />
          <Route path="/contact" element={<Contact />} />
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
