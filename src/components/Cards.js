import { useState } from "react";
import Card from "./Card";
import loader from './loader.gif'
import Spinner from "./Spinner";
function Cards({courses ,category}){
  
    const [likedCourses,setLikedCourses] = useState([]);



   let allCourses = [];
//    return  [{},{}] of allcombined courses 
  const getCourses = ()=>{
    if( category === 'All')
    {
        // All wala 
     Object.values(courses).forEach((courseCategory) =>{
        courseCategory.forEach((course)=>{
           allCourses.push(course);
        })
     })
    }
    else{
        // spefic wala pass kardo;
        allCourses = courses[category];

        console.log("This are courses ",courses);

        console.log("This are courses[category]" , courses[category]);
    }

  }

 

    // console.log("Inside cards", courses)
    
    if(courses == null)
    {
        return(
            // <div>
            //        <img src={loader} ></img>
            // <div>No Data Found12  </div>
            // </div>
            <Spinner></Spinner>
            
        )
    }
    
    else{

        getCourses();
    }

    return(
        
        
        <div className="flex flex-row flex-wrap gap-10 max-w-[1200px] min-h-[100vh]  " >
            {
                 
           allCourses.map((course)=>{
                return(
                    <Card  course = {course}  key = {course.id}  likedCourses={likedCourses}  setLikedCourses = {setLikedCourses}></Card>
                )
            })
        }
        </div>
    )
}

export default Cards;