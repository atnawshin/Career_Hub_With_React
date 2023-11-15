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
            <div className="bg-slate-100 mt-6 mb-16">
                <div >
                    <span className="flex justify-end items-end">
                        <img src="https://i.ibb.co/nLJmrMc/bg2.png" className="max-w-sm rounded-lg " />
                    </span>
                    <h2 className="text-4xl font-bold text-center">Job Details</h2>
                    <img src="https://i.ibb.co/0f1jwDy/bg1.png" className="max-w-sm rounded-lg " />
                </div>
            </div>
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
                <div className="bg-slate-200 p-5 rounded-lg">
                    <h2 className="text-lg font-extrabold border-2 border-b-slate-300 pb-4">Job Details</h2>
                    <div className="my-6">
                        <div className="flex gap-2 my-2">
                            <img src="https://i.ibb.co/0cCSqxw/money.png" alt="" />
                            <h2><span className="font-bold">Salary: </span>{job.salary}</h2>
                        </div>
                        <div className="flex gap-2 my-2">
                            <img className="h-6" src="https://i.ibb.co/RjMzR9G/calendar.png" alt="" />
                            <h2><span className="font-bold">Job Title: </span>{job.job_title}</h2>
                        </div>
                    </div>
                    <h2 className="text-lg font-extrabold border-2 border-b-slate-300 pb-4">Contact Information</h2>
                    <div className="my-6">
                        <div className="flex gap-2 my-2">
                            <img src="https://i.ibb.co/LC9v3fB/phone.png" alt="" />
                            <h2><span className="font-bold">Phone: </span>{job.contact_information.phone}</h2>
                        </div>
                        <div className="flex gap-2 my-2">
                            <img className="h-6" src="https://i.ibb.co/C7666kM/email.png" alt="" />
                            <h2><span className="font-bold">Email: </span>{job.contact_information.email}</h2>
                        </div>
                        <div className="flex gap-2 my-2">
                            <img className="h-6" src="https://i.ibb.co/cC2jh1c/location2.png" alt="" />
                            <h2><span className="font-bold">Address: </span>{job.contact_information.address}</h2>
                        </div>
                    </div>
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