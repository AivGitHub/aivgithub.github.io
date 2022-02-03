import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
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


function App() {
  const [data, setData] = useState([]);

    const getData=()=>{
        fetch('/database.json',
        {
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(data) {
            setData(data.main);
          });
      }

      useEffect(() => {
        getData()
      },[])

  return (
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
  );
}

export default App;
