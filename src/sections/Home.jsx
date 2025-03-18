// import profileImg from '../assets/profileImg.png'
import profileImg from '../assets/my-profile.png'
import resume from '../assets/resume.pdf'
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15" >
     
      <div className="text-center z-10 px-4">
          <img src={profileImg} 
               alt="my-profile" 
               className='w-[200px] border-0 mt-5 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[300px] object-cover object-bottom hover:translate-y-1 transition-all' />
      </div>

      <div className='text-center font-mono z-10 px-4'>
           <h1 className='text-4xl md:text-5xl lg:text-5xl lg:max-w-w[500px] font-semibold mb-6 px-1 
                       bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent'>
               I am Raphael W. SENGHOR
           </h1>
           <p className='text-gray-300 text-lg mb-8 max-w-lg mx-auto '>
            With a proven track record of success, I have led multidisciplinary teams toward excellence. Leveraging bold strategic approaches. I developed sophisticated software, automating key processes to support informed decision-making. Today, I am dedicated to consultancy, offering innovative solutions to organizations seeking transformation.
           </p>

           <div className='flex justify-center items-center space-x-4'>
               
                <a href="#contact" className='bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-md font-medium relative overflow-hidden'>Contact Me</a>
               
                <a 
                   href={resume} 
                   download
                   className='bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all rounded-md gap-4 items-center'

                   >
                   <p>Resume</p>
                   <span className='h-5 text-2xl text-white'>
                    <FiDownload />
                    </span>
                </a>


           </div>
      </div>

    </section>
  )
}

export default Home