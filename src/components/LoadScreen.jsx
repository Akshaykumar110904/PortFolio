//Progressive bar Animation

// import React, { useEffect } from "react"
// export const LoadScreen = ({onComplete}) => {   
//     const [text,setText] = React.useState("");
//     const [progress,setProgress] = React.useState(0)
//     const fullText = "Ravulakari Akshay Kumar";
//     useEffect(() => {
//         let index = 0;
//         const interval = setInterval(() => {
//             setText(fullText.substring(0, index + 1));
//             setProgress(((index+1)/fullText.length)*100)
//             index++;
//             if (index === fullText.length) {
//                 clearInterval(interval);
//                 setTimeout(() => {
//                     onComplete();
//                 },1000);
//             }
//         },100);
//         return () => clearInterval(interval);
//     }, [onComplete]);
//     return (    
//         <>
//         <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
//             <div className="mb-4 text-5xl font-mono font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">{text} <span className="animate-blink ml-1 text-white"> | </span></div>
//             <div className="w-[300px] h-[8px] bg-gray-800 rounded-full relative overflow-hidden">
//                 <div  className="h-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600  shadow-[0_0_10px_#3b82f6,0_0_5px_#3b82f6] transition-all duration-150 ease-linear " style={{ width: `${progress}%` }}>
//                 </div>
//             </div>
//         </div>
//             {/* <h3 className="text-black-600 font-bold text-lg">{`${Math.floor(progress)}%`}</h3> */}
//         </>
//     )
// }

//Circle loading Animation

// import React, { useEffect, useState } from "react";

// export const LoadScreen = ({ onComplete }) => {
//     const [text, setText] = useState("");
//     const [progress, setProgress] = useState(0);
//     const fullText = "Ravulakari Akshay Kumar";

//     // --- Circle Progress Bar Configuration ---
//     const radius = 50;
//     const strokeWidth = 8;
//     const viewBoxSize = radius * 2 + strokeWidth * 2;
//     const center = viewBoxSize / 2;
//     const circumference = 2 * Math.PI * radius;
//     const offset = circumference - (progress / 100) * circumference;

//     useEffect(() => {
//         let index = 0;
//         const interval = setInterval(() => {
//             setText(fullText.substring(0, index + 1));
//             setProgress(((index + 1) / fullText.length) * 100);
//             index++;
//             if (index === fullText.length) {
//                 clearInterval(interval);
//                 setTimeout(() => {
//                     onComplete();
//                 }, 1000);
//             }
//         }, 100);

//         return () => clearInterval(interval);
//     }, [onComplete, fullText.length]);

//     return (
//         <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            
//             <div className="mb-8 text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">
//                 {text}
//                 <span className="animate-blink ml-1 text-white">|</span>
//             </div>

//             <div className="relative flex items-center justify-center">
//                 <svg width="140" height="140" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
//                     {/* --- NEW: 5-Color Gradient Definition --- */}
//                     <defs>
//                         <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                             <stop offset="0%" stopColor="#f472b6" />   {/* Pink-400 */}
//                             <stop offset="25%" stopColor="#a855f7" />  {/* Purple-500 */}
//                             <stop offset="50%" stopColor="#6366f1" />  {/* Indigo-500 */}
//                             <stop offset="75%" stopColor="#3b82f6" />  {/* Blue-500 */}
//                             <stop offset="100%" stopColor="#22d3ee" /> {/* Cyan-400 */}
//                         </linearGradient>
//                     </defs>

//                     {/* Background Circle (the track) */}
//                     <circle
//                         cx={center}
//                         cy={center}
//                         r={radius}
//                         strokeWidth={strokeWidth}
//                         className="stroke-gray-800"
//                         fill="transparent"
//                     />
//                     {/* Progress Circle (applying the new gradient) */}
//                     <circle
//                         cx={center}
//                         cy={center}
//                         r={radius}
//                         strokeWidth={strokeWidth}
//                         stroke="url(#progressGradient)" 
//                         fill="transparent"
//                         strokeDasharray={circumference}
//                         strokeDashoffset={offset}
//                         strokeLinecap="round"
//                         style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dashoffset 0.15s linear' }}
//                     />
//                 </svg>
//                 {/* Percentage text displayed inside the circle */}
//                 <span className="absolute text-2xl font-bold text-cyan-300">
//                     {`${Math.floor(progress)}%`}
//                 </span>
//             </div>
//         </div>
//     );
// };

//Loading Bar

import React, { useEffect } from "react"
export const LoadScreen = ({onComplete}) => {   
    const [text,setText] = React.useState("");
    const fullText = "Ravulakari Akshay Kumar";
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                },1000);
            }
        },150);
        return () => clearInterval(interval);
    }, [onComplete]);
    return (    
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-5xl font-mono font-bold animate-pulse">{text} <span className="animate-blink ml-1"> | </span></div>
            <div className="w-[350px] h-[4px] bg-gray-900 rounded relative overflow-hidden">
                <div className="w-[35%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    
                </div>
            </div>
        </div>

    )
}