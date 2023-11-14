import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // const id1 = id.split(':')[1];
    // console.log(id1);
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast("Congratulations!!! You have applied successfully.")

        /*  const exists = (job === id);
         (!exists) ?
             toast("Congratulations!!! You have applied successfully.")
             : toast("Already applied"); */

        /* if (!exists) {
            toast("Congratulations!!! You have applied successfully.")

        } else {
            toast("Already applied")
        }
        toast("Congratulations!!! You have applied successfully.") */
    }

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="p-6 md:col-span-3 text-base">
                    <h2 className="text-lg"><span className="font-extrabold">Job Details of: </span><i>{job.job_title} </i></h2>
                    <p className="my-4"><span className="font-extrabold">Company Name: </span>{job.company_name}</p>
                    <p className="my-4  text-justify"><span className="font-extrabold">Job Description: </span> {job.job_description}</p>
                    <p className="my-4  text-justify"><span className="font-extrabold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <h2 className="font-extrabold">Educational Requirements: </h2>
                    <p>{job.educational_requirements}</p>
                    <h2 className="font-extrabold mt-4">Experiences: </h2>
                    <p>{job.experiences}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl bg-slate-600">Side Things...</h2>
                    <div className="flex items-end justify-end">
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;