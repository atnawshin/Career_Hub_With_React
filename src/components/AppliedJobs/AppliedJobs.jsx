import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import { FaAngleDown } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobs = () => {
    const jobs = useLoaderData();


    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (
        <div>


            <div className="bg-slate-100 mt-6 mb-16">
                <div >
                    <span className="flex justify-end items-end">
                        <img src="https://i.ibb.co/nLJmrMc/bg2.png" className="max-w-sm rounded-lg " />
                    </span>
                    <h2 className="text-4xl font-bold text-center">Applied Jobs</h2>
                    <img src="https://i.ibb.co/0f1jwDy/bg1.png" className="max-w-sm rounded-lg " />
                </div>
            </div>

            <div className="flex justify-between items-start">
                {/* <div>
                    <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
                </div> */}
                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn">Filter By<FaAngleDown /></summary>
                        <div className="flex justify-start items-start">
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                                <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                                <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                            </ul>
                        </div>
                    </details>
                    <ul>
                        {
                            displayJobs.map(job =>
                                <div key={appliedJobs.id} className="card lg:card-side bg-base-100 shadow-xl my-10 flex justify-between  w-full p-10 items-center rounded-none">
                                    <figure className="bg-slate-200 p-10 mr-10 "><img className="w-40" src={job.logo} alt="Album" /></figure>
                                    <div className="card-body self-auto max-w-lg mr-80">
                                        <h2 className="card-title">{job.job_title}</h2>
                                        <p>{job.company_name}</p>
                                        <div>
                                            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job.remote_or_onsite}</button>
                                            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job.job_type}</button>
                                        </div>
                                        <div className="my-4 flex">
                                            <h2 className="flex items-center mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{job.location}</h2>
                                            <h2 className="flex items-center"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>{job.salary}</h2>
                                        </div>
                                    </div>
                                    <div className="card-actions flex items-center">
                                        <Link to={`/job/${job.id}`}>
                                            <button className="btn bg-[#9873FF] text-white font-medium">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AppliedJobs;