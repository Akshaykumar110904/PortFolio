import React, { useState, useEffect } from 'react';

const gitUserName = 'Akshaykumar110904';

const Project = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const reposdata = await fetch(`https://api.github.com/users/${gitUserName}/repos`);
                if (!reposdata.ok) throw new Error('Failed to fetch repos');
                const repos = await reposdata.json();
                const filterrepos = repos.filter(repo => repo.description);
                setRepos(filterrepos);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                // Always set loading to false after the attempt
                setLoading(false);
            }
        };

        fetchRepos(); // Fetch data on initial component mount
        
        const intervalId = setInterval(fetchRepos, 10000); // Set up polling
        
        // Cleanup function: clear interval when component unmounts
        return () => {
            clearInterval(intervalId);
        };

    }, []); // <-- Empty dependency array ensures this runs only ONCE on mount

    if (loading) {
        return (
            <section className="flex justify-center items-center min-h-screen">
                <div>Loading projects...</div>
            </section>
        );
    }

    if (error && repos.length === 0) {
        return (
            <section className="flex justify-center items-center min-h-screen">
                <div>Error: {error}</div>
            </section>
        );
    }

    return (
        <>
            <section id='projects' className="relative py-20 w-full min-h-screen flex flex-col items-center justify-center">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] md:text-[15rem] font-bold text-gray-300/20 select-none">
                    Projects
                </h1>
                <div className="text-center mb-10">
                        <div className="inline-block rounded-lg p-[2px] bg-transparent hover:bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 transition-all duration-300">
                            <div className="rounded-[6px] bg-black">
                                <h2 className="text-4xl font-bold px-4 py-2 bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                                    Projects
                                </h2>
                            </div>
                        </div>
                    </div>
                {error && (
                    <div className="relative z-20 w-full max-w-4xl mx-auto px-4 text-center text-red-400 mb-4">
                        Failed to update projects. Showing cached data.
                    </div>
                )}
                <div>
                    <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
                        {/* --- CHANGES HERE --- */}
                        <ul style={{ listStyle: 'none', padding: 0 }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {repos.map(repo => (
                                <li key={repo.id} className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg shadow-xl shadow-blue-950 backdrop-blur-sm h-auto w-full"> {/* <-- Removed fixed width and margins */}
                                    <strong>
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-2xl justify-center items-center font-bold text-cyan-400 hover:underline "
                                        >
                                            <span >{repo.name}</span>
                                        </a>
                                    </strong>
                                    <div className="text-gray-300 my-2 h-auto ">{repo.description}</div>
                                    {repo.language && <small className="text-gray-400">Language: {repo.language}</small>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;