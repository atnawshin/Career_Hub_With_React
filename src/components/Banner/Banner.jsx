
const Banner = () => {
    return (
        <div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse md:gap-72 my-10">
                    <img src="https://i.ibb.co/WzpkxzW/user.png" className="max-w-sm rounded-lg flex items-end justify-end" />
                    <div>
                        <h2 className="text-5xl font-bold text-left">One Step <br />
                            Closer To Your <br />
                            <span className="text-[#9873FF]">Dream Job</span> </h2>
                        <p className="py-6">Explore thousands of job opportunities with all the <br />
                            information you need. Its your future. Come find it. Manage all <br />
                            your job application from start to finish.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;