import React,{useEffect, useState} from 'react';
import axios from "axios";
import base_url from "./../api/bootapi";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { toast } from 'react-toastify';

const Addcourse = () => {
    useEffect(()=>{
        document.title="Add Courses";
    },[]);

    const [course,setCourse] = useState({

    });

    // form handeler function
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    //Post Data to function
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Uploaded Successfully");
            },
            (error)=>{
                console.log(error)
                toast.error("Something is wrong");
            }
        )
    };

    return(
        <div>
            <h1 className="text-center my-3" >Fill Task Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label>Task ID</Label>
                    <Input type="text" name="c_id" id="c_id" placeholder="Task ID" 
                    onChange={(e)=>{
                        setCourse({...course, id: e.target.value});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label>Task</Label>
                    <Input type="text" name="c_name" id="c_name" placeholder="Enter Task"
                    onChange={(e)=>{
                        setCourse({...course, title: e.target.value});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input type="text" name="c_des" id="description" style= {{height:200}}
                    
                    onChange={(e)=>{
                        setCourse({...course, description: e.target.value});
                    }}/>
                </FormGroup>
        
       
                <Container className="text-center">
                    <Button type='submit' color="success" >Add Task</Button>
                    <Button type='reset' color="warning ml-3">Clear</Button>
                </Container>
        </Form>

    </div>
  );
}
export default Addcourse;

      