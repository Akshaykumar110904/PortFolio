import React, { useEffect } from "react"

export const LoadScreen = ({onComplete}) => {   
    const [text,setText] = React.useState("");
    const [progress,setProgress] = React.useState(0)
    const fullText = "Ravulakari Akshay Kumar";
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            setProgress(((index+1)/fullText.length)*100)
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                },1000);
            }
        },100);
        return () => clearInterval(interval);
    }, [onComplete]);
    return (    
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-5xl font-mono font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">{text} <span className="animate-blink ml-1 text-white"> | </span></div>
            <div className="w-[300px] h-[8px] bg-gray-800 rounded-full relative overflow-hidden">
                <div  className="h-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600  shadow-[0_0_10px_#3b82f6,0_0_5px_#3b82f6] transition-all duration-150 ease-linear" style={{ width: `${progress}%` }}>
                </div>
            </div>
            <h3 className="text-blue-600 font-bold text-xl">{`${Math.floor(progress)}%`}</h3>
        </div>
    )
}