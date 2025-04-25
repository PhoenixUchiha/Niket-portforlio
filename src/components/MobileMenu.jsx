import { useEffect } from "react"

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`fixed inset-0 bg-black/90 backdrop-blur-lg transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} z-30`}>
            <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
                <a href="#home" 
                   onClick={() => setMenuOpen(false)} 
                   className="text-gray-300 hover:text-white transition-colors">
                    Home
                </a>
                <a href="#about" 
                   onClick={() => setMenuOpen(false)} 
                   className="text-gray-300 hover:text-white transition-colors">
                    About
                </a>
                <a href="#projects" 
                   onClick={() => setMenuOpen(false)} 
                   className="text-gray-300 hover:text-white transition-colors">
                    Projects
                </a>
                <a href="#Contact" 
                   onClick={() => setMenuOpen(false)} 
                   className="text-gray-300 hover:text-white transition-colors">
                    Contact
                </a>
            </div>
        </div>
    )
}