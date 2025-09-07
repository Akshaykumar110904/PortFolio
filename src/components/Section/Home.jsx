import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
const roles = ["Mern Stack Developer", "Frontend Developer", "Backend Developer", "Data Analyst"];
const [roleIndex, setRoleIndex] = useState(0);
const [text, setText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);
const typingSpeed = 150;
const deletingSpeed = 75;
const pauseDuration = 3000;
useEffect(() => {
    const currentRole = roles[roleIndex];
    const handleTyping = () => {
    setText(
        isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1)
    );
    if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }
    };
    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
}, [text, isDeleting, roleIndex, roles]);
return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative py-16 ">
    <RevealOnScroll>
        
        <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-mono text-yellow-400 font-bold hover:scale-105 transition-transform duration-300">
            Hi! I'am Ravulakari Akshay Kumar
        </h1>
        <div className="text-2xl md:text-3xl mt-4 h-10 ">
            <span className="text-5xl font-mono font-bold bg-gradient-to-r from-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">{text}</span>
            <span className="animate-blink ml-1 text-5xl">|</span>
        </div>
        <div className="flex justify-center space-x-4 mt-8 text-lg md:text-xl">
            <a href="#Skills" className="bg-blue-500/50 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[1px_1px_15px_rgba(59,130,246,0.5)] hover:bg-blue-500/5 hover:border-blue-500 hover:text-blue-500">Skills</a>
            <a href="#Projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[1px_1px_15px_rgba(59,130,246,0.5)] hover:bg-blue-600/5 hover:border-blue-500 hover:text-blue-500">Projects</a>
        </div>
        </div>
    </RevealOnScroll>
    </section>
);
};