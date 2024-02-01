import React, { useState } from "react";
import Cards from './components/Cards'
import Filter from './components/Filters'
import Navbar from './components/navbar.js'
import {apiUrl,filterData} from './data.js'
import { useEffect } from "react";
import { toast } from "react-toastify";
const App = () => {
 
  const [courses,setCourses] = useState(null);
  const [category,setCategory] =useState(filterData[0].title)

  useEffect( ()=>{
     const fetchData = async () =>{
         try{
              const res = await fetch(apiUrl); 
              const output = await res.json();
              setCourses(output.data);
              console.log(output);
              // Save the data

         }
         catch(error)
         {
             toast.error("Somenthing Went Wrogn")
         }
     }
     fetchData();
  },[])
   

  return (<div className= " bg-slate-500"  >
         <Navbar></Navbar>

         <div className="">
        <Filter filterData={filterData} category ={category} setCategory = {setCategory}></Filter>
        <div className=" flex flex-row flex-wrap   w-[65%] mx-auto  mt-4 ">
         <Cards courses = {courses}   category ={category}  ></Cards>
         </div>
         </div>
  </div>
  );
};

export default App;
