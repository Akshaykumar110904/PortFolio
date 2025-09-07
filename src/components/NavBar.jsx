import { useEffect } from "react"

export const NavBar = ({menuOpen,setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    },[menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-1g"> 
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex  justify-between items-center h-16">
                    {" "}<a href="#home" className="text-4xl text-white opacity-45 font-mono font-semibold">Ravulakari Akshay Kumar</a>{" "}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-6 text-lg ">
                        <a href="#home" className="m-5 p-2 border border-black hover:-translate-y-0.5 hover:shadow-[0_1px_15px_rgba(59,246,130,0.5)] hover:bg-green-500/5  hover:text-green-500 transition-colors duration-300">Home</a>
                        <a href="#about" className="m-5 p-2 border border-black hover:-translate-y-0.5 hover:shadow-[1px_0_15px_rgba(59,246,130,0.5)] hover:bg-green-500/5  hover:text-green-500 transition-colors duration-300">About</a>
                        <a href="#skills" className="m-5 p-2 border border-black hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.5)] hover:bg-green-500/5  hover:text-green-500 transition-colors duration-300">Skills</a>
                        <a href="#projects" className="m-5 p-2 border border-black hover:-translate-y-0.5 hover:shadow-[1px_1px_15px_rgba(59,246,130,0.5)] hover:bg-green-500/5  hover:text-green-500 transition-colors duration-300">Projects</a>
                        <a href="#contact" className="m-5 p-2 border border-black hover:-translate-y-0.5 hover:shadow-[1px_1px_15px_rgba(59,246,130,0.5)] hover:bg-green-500/5  hover:text-green-500 transition-colors duration-300">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}