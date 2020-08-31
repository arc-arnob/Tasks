import React, {useState, useEffect} from 'react';
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const Updatecourse=()=>{
    useEffect(()=>{
        document.title="Update Courses";
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
            <h1 className="text-center my-3" >Update Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label>Course ID</Label>
                    <Input type="text" name="c_id" id="c_id" placeholder="Course ID" 
                    onChange={(e)=>{
                        setCourse({...course, id: e.target.value});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label>Course Name</Label>
                    <Input type="text" name="c_name" id="c_name" placeholder="Course Name"
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
                    <Button type='submit' color="success" >Submit</Button>
                    <Button type='reset' color="warning ml-3">Clear</Button>
                </Container>
        </Form>

    </div>
  );
}


export default Updatecourse;