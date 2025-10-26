import { useState } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        from_email: "",
        message: "",
    });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus("Message Sent Successfully!");
                setFormData({ name: "", from_email: "", message: "" });
            })
            .catch((error) => {
                console.log(error.text);
                setStatus("Something went wrong, please try again.");
            });
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-6 ">
            
            <RevealOnScroll>
                <div className="px-4 w-200 ">
                    <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                required
                                onChange={handleChange}
                                className="w-full border bg-white/5 border-white/5 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                placeholder="Email Id"
                                value={formData.from_email}
                                required
                                onChange={handleChange}
                                className="w-full border bg-white/5 border-white/5 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border bg-white/5 border-white/5 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded-3xl font-medium transition relative overflow-hidden border border-transparent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-blue-500/5 hover:border-blue-500 hover:text-blue-500"
                        >
                            Submit
                        </button>
                        {status && <p className="text-center mt-4">{status}</p>}
                    </form>
                </div>
                <div className='flex flex-col justify-center m-3 p-3'>
                    <div className='flex flex-row items-center justify-between'>
                        <button className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[5px_5px_15px_rgba(59,130,246,0.7)] hover:bg-blue-500/5 hover:border-blue-500 hover:text-blue-500' ><a href="https://github.com/Akshaykumar110904">Github</a></button>
                        {/* <button className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[5px_5px_15px_rgba(59,130,246,0.7)] hover:bg-blue-500/5 hover:border-blue-500 hover:text-blue-500'>Discord</button> */}
                        <button className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[5px_5px_15px_rgba(59,130,246,0.7)] hover:bg-blue-500/5 hover:border-blue-500 hover:text-blue-500'><a href="https://www.linkedin.com/in/ravulakari-akshay-kumar-839192291/">LinkedIn</a></button>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};