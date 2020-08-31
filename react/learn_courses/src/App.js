import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import Addcourse from "./components/Addcourse";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Updatecourse from "./components/Updatecourse"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  const btnHandle =()=>{
    toast("Hello this is a toast")
  }
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact/>
              <Route path="/add-course" component={Addcourse} exact/>
              <Route path="/view-courses" component={Allcourses} exact/>
              <Route path="/update-course" component={Updatecourse} exact/>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
