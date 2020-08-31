import React, {useState, useEffect} from 'react';
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from 'react-toastify';

const Allcourses = () =>{

    useEffect(()=>{
        document.title="All Courses";
        //getAllCoursesFromServer();
    },[]);


    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //console.log(response);
                console.log(response.data);
                toast.success("Page Loaded Successfully");
                setCourses(response.data);
            },
            (error)=>{
                console.log(error)
                toast.error("Something is wrong");
            }
        )
    }
    //Load getCourses
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);

    const [courses, setCourses] = useState([
        
    ]);

    const removeCourseById=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }

    return(

        <div>
            <h1>All Tasks</h1>
            <p>List of all Tasks</p>

            {

                courses.length>0? 
                    courses.map((item) => <Course key={item.id} course = {item} update = {removeCourseById}/>)
                    :"No Tasks. Good Job!"

            }
        </div>
    );


}
export default Allcourses;