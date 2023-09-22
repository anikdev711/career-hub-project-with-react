

const Banner = () => {
    return (
        <div>
            {/* <h3 className="text-5xl text-center">Banner</h3> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/src/assets/images/user.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">
                            One Step
                            <br />
                            Closer To Your
                            <br />
                            <span className="text-blue-500 font-bold">Dream Job</span>
                        </h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;