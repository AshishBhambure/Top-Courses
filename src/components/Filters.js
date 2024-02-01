

// ${
//      category  === data.title
//      ? "bg-opacity-60 border-white"
//      : "border-opacity-40 border-transparent"
//  }
function Filters({filterData,category,setCategory}){
 
     function filterHandler(title){

          setCategory(title);
          // console.log(category);
     }
    return (
         <div className="  max-w-[900px] mx-auto flex flex-row gap-4 justify-center items-center flex-wrap " >
              
              {
                filterData.map((data)=>{
                   return ( <button  onClick={ () =>filterHandler(data.title)}
                      className= {
                    ` mt-3 text-lg px-2 py- rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                    ${
                          category  === data.title
                         ? "bg-opacity-60 border-white"
                         : "border-opacity-40 border-transparent"
                     }
                    `
                     
                   }>
                      {data.title}
                    </button>
                   )
                })
              }
         </div>
    )
}
export default Filters;