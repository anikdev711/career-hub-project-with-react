import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobs, storedJobIds, jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-3xl text-center">Applied jobs: {appliedJobs.length}</h2>

            <details className="dropdown mb-32">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            {/* <ul> */}
            {/* {appliedJobs.map(job => <li key={job.id}> */}
            {/* <span>{job.job_title}</span> */}
            {/* </li>) */}
            {/* // } */}
            {/* </ul> */}
            <div>
                {
                    displayJobs.map(job =>

                        <div key={job.id} className="card card-side bg-base-100 shadow-xl mb-4">
                            <figure className="mr-8 pl-4"><img src={job.logo} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{job.job_title}</h2>
                                <p>{job.company_name}</p>
                                <div>
                                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job.remote_or_onsite}</button>
                                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job.job_type}</button>
                                </div>
                                <div className="flex mt-4 mb-4">
                                    <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{job.location}</h2>
                                    <h2 className="flex"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>{job.salary}</h2>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary text-white font-bold">View Details</button>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;