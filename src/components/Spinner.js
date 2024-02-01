
import './Spinner.css'
const Spinner = ()=>{
    

    return(
        <div className="max-w-[900px] mx-auto flex  flex-col justify-center items-center h-[100vh]" >
             <div className="loader"></div>
             <p className='text-bgDark text-semibold' >Loading...</p>
        </div>
    )
}

export default Spinner;