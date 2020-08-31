import React,{useEffect} from 'react';
import {Jumbotron, Container, Button}  from 'reactstrap';
const Home =()=> {

  useEffect(()=>{
    document.title="Home || Tasks";
},[]);
  return (
    <div>
        <Jumbotron className="text-center bg-primary">
            <h1 className="text-white">To Do Tasks</h1>
            <p>Here are all your tasks</p>
            <Container>
                <Button color="danger" outline href="/view-courses">View Tasks</Button>
            </Container>
        </Jumbotron>
        
        
    </div>
  );
}

export default Home;
