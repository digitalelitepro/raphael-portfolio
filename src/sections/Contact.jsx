import RevealOnScroll from "../UI/RevealOnScroll"

 
const Contact = () => {
  return (
    <div id="contact" className="min-h-screen font-mono flex items-center justify-center py-20">
  <RevealOnScroll>  
    <div className="px-4   md:w-4xl w-md">
        <h2 className="max-w-3xl text-4xl font-semibold
        bg-gradient-to-r from-teal-500  to-indigo-800
         bg-clip-text text-transparent text-center mb-4">
            Get In Touch
        </h2>

        <form action="https://formsubmit.co/raphael.senghor@digitalelitepro.com" method="POST" className="space-y-6">
               <div className="relative">
                   <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name..." 
                    required
                    className="w-full bg-white/10 border-r-white/10 rounded px-4 py-3 text-white transition 
                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                   />
               </div>
               <div className="relative">
                   <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="example@gmail.com" 
                    required
                    className="w-full bg-white/10 border-r-white/10 rounded px-4 py-3 text-white transition 
                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                   />
               </div>
               <div className="relative">
                   <textarea 
                    type="message" 
                    id="message" 
                    name="message" 
                    rows={6}
                    placeholder="Type your message ..." 
                    required
                    className="w-full bg-white/10 border-r-white/10 rounded px-4 py-3 text-white transition 
                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                   />
               </div>

               <button
                 type="submit"
                 className="w-full bg-gradient-to-r flex justify-center cursor-pointer from-teal-500 
                 to-indigo-600 px-6 rounded font-medium transition relative overflow-hidden
                  hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,30,246,0.4)] py-3"
               >
                    Submit
               </button>
        </form>

    </div>

    </RevealOnScroll>  
    </div>
  )
}

export default Contact