import { useEffect, useState } from "react"



 
const LoadingScreenAnimation = ({onComplete}) => {
  const [text, setText] = useState("")
 const msg  = "Chargement..." 
 const processes  =  {
    interVal : null,
    timeOut : null
 } 
   useEffect(() => { 
    let index = 0
    
    processes.interVal = setInterval(()=> {
       //    setText(msg.substring(0,index))
       setText(`${index}%`)
       index +=1
        if(index > 100)
        {
            clearInterval(processes.interVal)
             processes.timeOut = setTimeout(()=>{
                 onComplete()
            },1500)
        }  
       
       
    },50)

    return () => {
        clearInterval(processes.interVal)
        clearTimeout(processes.timeOut)
    }
   },[onComplete])

 
  return (
      <div className="fixed inset-0 z-60 bg-black text-gray-100 flex flex-col items-center justify-center gap-1">

        <div className="w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar"></div>
        </div>
  

        <div className="mb-4 text-2xl font-mono font-semibold">Chargement... {text}
            <span className="animate-blink ml-1 text-2xl font-bold"> | </span></div>

        <div className="w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar"></div>
        </div>

      </div>
  )
}

export default LoadingScreenAnimation