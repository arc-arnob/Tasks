import React from 'react';
import axois from "axios";
import {Link} from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { toast } from 'react-toastify';
import base_url from "./../api/bootapi";

const Course = ({ course, update }) => {

  const deleteCourse=(id)=> {
    axois.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        console.log(response.data);
        toast.success("Deleted Successfully");
        update(id);
        
      },
      (error)=>{
        console.log(error);
        toast.error("Something went wrong");
        
      }
    )

  }

  const updateCourseById=(id)=>{
    axois.put(`${base_url}/courses/${id}`).then(
      response=>{
        console.log(response.data);
        toast.success("Updated Successfully");
      },
      (error)=>{
        console.log(error);
        toast.error("Something went wrong!");
      }

    )
  }
    return (
      <div>
        <Card className="text-center">
          <CardBody>
            <CardTitle>{course.title}</CardTitle>
            <CardSubtitle>{course.description}</CardSubtitle>
            
            <Button color="danger" className="text-center" onClick={()=>{
              deleteCourse(course.id);
            }}>Delete</Button>
            <Button tag={Link} to="/update-course" color="warning" className="text-center ml-3">Update</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default Course;