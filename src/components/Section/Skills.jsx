import { RevealOnScroll } from "../RevealOnScroll";

const skillCategories = [
    {
        title: "FrontEnd",
        skills: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
    },
    {
        title: "BackEnd",
        skills: ["Java", "Node.js", "Express", "Python", "Django"],
    },
    {
        title: "Database",
        skills: ["MongoDB", "MySQL"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "AWS", "VS Code"],
    },
];

export const Skills = () => {
    return (
        <section id='skills' className="min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden">
            
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] md:text-[15rem] font-bold text-gray-200/10 select-none">
                Skills
            </h1>
            <div className="relative z-10 w-full flex flex-col items-center">
                <RevealOnScroll>
                    <div className="text-center mb-10">
                        <div className="inline-block rounded-lg p-[2px] bg-transparent hover:bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 transition-all duration-300">
                            <div className="rounded-[6px] bg-black">
                                <h2 className="text-4xl font-bold px-4 py-2 bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                                    My Technical Skills
                                </h2>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                <div className="flex flex-wrap justify-center w-full max-w-7xl mx-auto gap-8 px-4">
                    {skillCategories.map((category) => (
                        <RevealOnScroll key={category.title}>
                            <div className="rounded-xl border border-white/10 glass p-8 flex-1 h-full min-w-[300px] hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {category.skills.map((skill) => (
                                        <span key={skill} className="bg-blue-500/10 text-blue-300 py-2 px-4 rounded-full text-base">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};