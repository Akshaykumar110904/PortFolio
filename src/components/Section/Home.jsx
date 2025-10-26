// import React, { useState, useEffect } from "react";
// import { RevealOnScroll } from "../RevealOnScroll";
// export const Home = () => {
// const roles = ["Mern Stack Developer", "Frontend Developer", "Backend Developer", "Data Analyst"];
// const [roleIndex, setRoleIndex] = useState(0);
// const [text, setText] = useState("");
// const [isDeleting, setIsDeleting] = useState(false);
// const typingSpeed = 50;
// const deletingSpeed = 70;
// const pauseDuration = 500;
// useEffect(() => {
//     const currentRole = roles[roleIndex];
//     const handleTyping = () => {
//     setText(
//         isDeleting
//         ? currentRole.substring(0, text.length - 1)
//         : currentRole.substring(0, text.length + 1)
//     );
//     if (!isDeleting && text === currentRole) {
//         setTimeout(() => setIsDeleting(true), pauseDuration);
//     } else if (isDeleting && text === "") {
//         setIsDeleting(false);
//         setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
//     }
//     };
//     const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
//     return () => clearTimeout(timeout);
// }, [text, isDeleting, roleIndex, roles]);
// return (
//     <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative py-16 ">
//     <RevealOnScroll>
        
//         <div className="flex flex-col items-center">
//             <div className="photo-div" ></div>
//         <h1 className="text-4xl md:text-5xl font-mono text-yellow-400 opacity-80 text-shadow-yellow-600 font-bold hover:scale-105 transition-transform duration-300">
//             Hi! I'am Ravulakari Akshay Kumar
//         </h1>
//         <div className="text-2xl md:text-3xl mt-4 h-10 ">
//             <span className="text-5xl font-mono font-bold bg-blue-500  bg-clip-text text-transparent ">{text}</span>
//             {/* <span className="animate-blink ml-1 text-5xl">|</span> */}
//         </div>
//         <div className="flex justify-center space-x-4 m-8 p-8 md:m-0 md:p-0 md:mt-12 text-lg md:text-xl">
//             <a href="#Skills" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[5px_5px_15px_rgba(59,130,246,0.7)] hover:bg-blue-500/5 hover:border-blue-500 hover:text-blue-500">Skills</a>
//             <a href="#Projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[5px_5px_15px_rgba(59,130,246,0.7)] hover:bg-blue-600/5 hover:border-blue-500 hover:text-blue-500">Projects</a>
//         </div>
//         </div>
//     </RevealOnScroll>
//     </section>
// );
// };

import React, { useState, useEffect, useMemo } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    // useMemo ensures the roles array is not recreated on every render
    const roles = useMemo(() => ["Mern Stack Developer", "Frontend Developer", "Backend Developer", "Data Analyst"], []);
    
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");

    // Speeds and Durations
    const typingSpeed = 40;
    const pauseDuration = 1000; // A slightly longer pause before disappearing

    useEffect(() => {
        const currentRole = roles[roleIndex];

        // If the current role is fully typed
        if (text === currentRole) {
            // Set a timer to pause, then reset for the next role
            const pauseTimeout = setTimeout(() => {
                setText(""); // Make the text disappear
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to the next role
            }, pauseDuration);

            // Cleanup the timeout if the component unmounts or dependencies change
            return () => clearTimeout(pauseTimeout);
        }

        // Otherwise, continue typing the current role
        const typingTimeout = setTimeout(() => {
            setText(currentRole.substring(0, text.length + 1));
        }, typingSpeed);

        // Cleanup the typing timeout
        return () => clearTimeout(typingTimeout);

    }, [text, roleIndex, roles, typingSpeed, pauseDuration]);

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative py-16">
            <RevealOnScroll>
                <div className="flex flex-col items-center">
                    <div className="photo-div"></div>
                    <h1 className="text-4xl md:text-5xl font-mono text-teal-500 opacity-80  text-shadow-yellow-600 font-bold hover:scale-105 transition-transform duration-300">
                        Hi! I'm Ravulakari Akshay Kumar
                    </h1>
                    <div className="text-2xl md:text-3xl mt-4 h-10 font-mono font-bold">
                        <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">{text}</span>
                        {/* <span className="animate-blink text-blue-500">|</span> */}
                    </div>
                    <div className="flex justify-center space-x-4 m-8 p-8 md:m-0 md:p-0 md:mt-12 text-lg md:text-xl">
                        <a href="#skills" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[5px_5px_15px_rgba(59,130,246,0.7)] hover:bg-blue-500/5 hover:border-blue-500 hover:text-blue-500">Skills</a>
                        <a href="#Projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[5px_5px_15px_rgba(59,130,246,0.7)] hover:bg-blue-600/5 hover:border-blue-500 hover:text-blue-500">Projects</a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};