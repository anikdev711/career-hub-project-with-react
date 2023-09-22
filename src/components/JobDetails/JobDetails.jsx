import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    // console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    return (
        <div className="grid gap-4 md:grid-cols-4 mt-4 mb-4">
            <div className="border md:col-span-3">
                <h2 className="text-2xl font-bold mb-2">Job Details</h2>
                <p> <span className="font-bold">Job Description:</span> {job.job_description}</p>
                <p> <span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                <p className="font-bold">Educational Requirements:</p>
                <p>{job.educational_requirements}</p>
                <p className="font-bold">Experiences:</p>
                <p>{job.experiences}</p>
            </div>
            <div className="border">
                <h3 className="text-2xl font-bold text-center mb-2">Job Details</h3>
                <p><span className="font-bold">Salary: </span>{job.salary}</p>
                <p><span className="font-bold">Job Title: </span>{job.job_title}</p>
                <br />
                <p className="font-bold">Contact Information</p>
                <br />
                <p><span className="font-bold">Phone: </span>{job.contact_information.phone}</p>
                <p><span className="font-bold">Email: </span>{job.contact_information.email}</p>
                <p><span className="font-bold">Address: </span>{job.contact_information.address}</p>
                <button onClick={handleApplyJob} className="btn btn-neutral text-white font-bold mt-2 w-full">Apply Now</button>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;