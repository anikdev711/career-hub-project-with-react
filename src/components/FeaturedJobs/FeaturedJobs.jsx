import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-5xl mt-4 mb-4">Featured Jobs: {jobs.length}</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 px-4 py-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center">
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary text-white font-bold mb-4 ">Show All jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;