import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-bold text-gray-200/10 z-0 select-none">
                About Me
            </h1>
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
                <RevealOnScroll>
                    <div className="text-center mb-10">
                        <div className="inline-block rounded-lg p-[2px] bg-transparent hover:bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 transition-all duration-300">
                            <div className="rounded-[6px] bg-black">
                                <h2 className="text-4xl font-bold px-4 py-2 bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                                    About Me
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Hello! I'm a passionate developer with a love for creating beautiful and functional web applications.<br/>With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code.<br/> When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or indulging in my hobbies like watching movies and playing cricket.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="p-6 rounded-xl border border-white/10 glass hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-semibold mb-4 text-pink-400">Education</h3>
                            <ul>
                                <div>
                                    <li className="mb-2">
                                        <span className="font-semibold">B.Tech in Computer Science</span> - SR University (2022 - 2026)
                                    </li>
                                </div>
                                <div>
                                    <li className="mb-2">
                                        <span className="font-semibold">Intermediate</span> - SR Junior College (2020 - 2022)
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 glass hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-semibold mb-4 text-pink-400">Hobbies</h3>
                            <ul>
                                <div>
                                    <li className="mb-2">Watching Movies</li>
                                </div>
                                <div>
                                    <li className="mb-2">Playing Cricket</li>
                                </div>
                                <div>
                                    <li className="mb-2">Exploring New Technologies</li>
                                </div>
                                <div>
                                    <li className="mb-2">Contributing to Open Source</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};