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
                if (loading) {
                    setLoading(false);
                }
            }
        };
        fetchRepos(); 
        const intervalId = setInterval(fetchRepos, 60000);
        return () => {
            clearInterval(intervalId);
        };

    }, [loading]); 
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
            <section id='projects' className="relative py-20">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] md:text-[15rem] font-bold text-gray-300/20 select-none">
                    Projects
                </h1>
                {error && (
                    <div className="relative z-20 w-full max-w-4xl mx-auto px-4 text-center text-red-400 mb-4">
                        Failed to update projects. Showing cached data.
                    </div>
                )}
                <div>
                    <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
                        <ul style={{ listStyle: 'none', padding: 0 }} className='flex flex-wrap gap-4 justify-center items-center'>
                            {repos.map(repo => (
                                <li key={repo.id} className="bg-gray-900/50 border border-gray-700 p-4 mb-4 rounded-lg shadow-xl shadow-blue-950 backdrop-blur-sm h-auto w-[400px] mx-3">
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