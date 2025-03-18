import { useState } from 'react'
import dashboard from '../assets/dashboard-app.webp'
import ecommerce from '../assets/e-commerce-app.png'
import food_app from '../assets/food-app.jpg'
import travel from '../assets/travel-app.jpg'
import RevealOnScroll from '../UI/RevealOnScroll'
const Projects = () => {
  const [projects] = useState([
    {
        image : dashboard,
        name:"Dashboard App",
        brief:"Scalable Dashboard App With CRUD operations manages all the bookings, users, guest and services",
    },
    {
        image : ecommerce,
        name:"E-commerce App",
        brief:"Scalable Dashboard App With CRUD operations manages all the bookings, users, guest and services",
    },
    {
        image : food_app,
        name:"Food App",
        brief:"Scalable Dashboard App With CRUD operations manages all the bookings, users, guest and services",
    },
    {
        image : travel,
        name:"Travel App",
        brief:"Scalable Dashboard App With CRUD operations manages all the bookings, users, guest and services",
    },
  ])
  return (
    <section id="projects" className="min-h-screen flex items-center font-mono justify-center py-20">

      <RevealOnScroll>
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="max-w-3xl text-4xl 
            bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-600 
            bg-clip-text text-transparent text-center mb-6">Features Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  {
                      projects.map((project, index) => ( 
                        <div key={index} className='p-6 rounded-xl flex flex-col items-center text-center border-2
                         border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8_8px_rgba(59,130,246,0.2)]
                         hover:-translate-y-1 transition-all hover:bg-cyan-900'>
                            <h3 className='font-semibold text-xl mb-4'>{project.name}</h3>
                              <p className='text-gray-300 mb-4'>{project.brief}</p>

                              <div className='flex flex-wrap sm:items-center gap-2 mb-4'>
                                 {
                                     ["React", "Superbase", "Vercel"].map((tech, index) => (
                                        <span
                                          key={index}
                                          className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22,46,0.2)] transition'
                                        >
                                                 {tech}
                                        </span>
                                     ))
                                 }
                                 <div className='flex flex-col text-center my-5 py-3 
                                 justify-center gap-3 border-2 border-white/10
                                  hover:border-blue-500/30 
                                  hover:shadow-[9_2px_8px_rgba(59,130,22,46,0.2)]
                                   cursor-pointer rounded-xl '>

                                    <p className='text-gray-200'> View Project</p>
                                    <a href="https://github.com/ISHAQ98"
                                     className='flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white'
                                    >
                                     <img src={project.image} alt="" />
                                    </a>



                                   </div>
                              </div>

                         </div>
                      ) )
                  }
            </div>

         </div>
         </RevealOnScroll>  
    </section>
  )
}

export default Projects