import { useEffect } from "react"

export const NavBar = ({menuOpen,setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    },[menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-1g"> 
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {" "}<a href="#home" className="text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-violet-600 bg-clip-text text-transparent font-mono font-semibold">Ravulakari Akshay Kumar</a>{" "}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-6 text-lg">
                        <a href="#home" className="hover:text-green-500 transition-colors duration-300">Home</a>
                        <a href="#about" className="hover:text-green-500 transition-colors duration-300">About</a>
                        <a href="#skills" className="hover:text-green-500 transition-colors duration-300">Skills</a>
                        <a href="#projects" className="hover:text-green-500 transition-colors duration-300">Projects</a>
                        <a href="#contact" className="hover:text-green-500 transition-colors duration-300">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}