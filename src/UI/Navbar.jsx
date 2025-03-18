import { useEffect, useState } from "react";
import Logo from "./Logo"
import { MdMenu } from "react-icons/md";
 
const Navbar = ({IsMobileMenuOpen, setIsMobileMenuOpen}) => {
     
  return (
    <nav className="fixed z-40 w-full px-1 top-0 bg[rgba(10,10,10,0.8)] border-b border-white/10 shadow-lg backdrop-blur-lg">
         <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16 font-mono">
                    <Logo />
                  {
                     !IsMobileMenuOpen &&    
                     <div  onClick={() => setIsMobileMenuOpen(prev => !prev)} className="text-2xl md:hidden right-7 z-80 cursor-pointer absolute font-mono">
                       <MdMenu />
                          
                     </div>
                  }

                    <div className="flex md:flex items-center space-x-8">
                          <div className="hidden md:flex items-center space-x-8">
                               <a  href="#home" className="text-gray-300 hover:text-xl hover:text-white transition-all">
                                  Home
                               </a>
                               <a href="#about" className="text-gray-300 hover:text-xl hover:text-white transition-all">
                                  About
                               </a>
                               <a href="#projects" className="text-gray-300 hover:text-xl hover:text-white transition-all">
                                  Projects
                               </a>
                               <a href="#contact" className="text-gray-300 hover:text-xl hover:text-white transition-all">
                                  Contact
                               </a>
                          </div>
                    </div>
                </div>
         </div>
    </nav>
  )
}

export default Navbar