import { FaRegHeart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import { useState } from "react";

function Card({course,likedCourses,setLikedCourses}){
    const [like,setLike] = useState(false);
 
    const clickHandler = ()=>{
            setLike(!like);
            // console.log(like);
         if(likedCourses.includes(course.id)){

            // Already Liked 
            // Remove
             
             setLikedCourses( (prev) => prev.filter( (id)=> id !== course.id) )
             toast.warning("Like Removed")
         }
         else{
            
            // Insert
            
            if(likedCourses.length === 0)
            {
                 setLikedCourses([course.id])
            }
            else{
                 setLikedCourses((prev) => [...prev,course.id])
            }

            toast.success("Liked Succesfully ")
         }
    }
    return(
        <div className=" w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden max-h-[300px]" >
             <div className="relative" >
                <img src = {course.image.url} ></img>
                 <div >
                    <button onClick={clickHandler}
                    className=" w-[40px] h-[40px] bg-white rounded-full  absolute right-2 bottom-3 flex justify-center items-center">
                        {
                            like ? (<FcLike fontSize="1.75rem"></FcLike>) :(<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>)
                        }
                         {/* <FcLikePlaceholder  className="" fontSize="1.75rem" ></FcLikePlaceholder> */}
                    </button>
                 </div>

             </div>

             <div className="p-4">
                <p className=" text-white font-semibold text-lg leading-6 " >{course.title}</p>
                <p className="mt-2 text-white">
                     {
                      course.description.length >100 ? (`${course.description.substr(0,100)}...`) : (course.description)
                     }
                </p>
             </div>
        </div>
    )
}
export default Card;