
const Header = () => {
    return (
        <div className="rounded-3xl">
            <div
                className="hero h-[600px] rounded-3xl"
                style={{
                    backgroundImage: "url(/Banner.jpg)",
                    borderRadius:"20px",
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-neutral-content text-center rounded-3xl">
                    <div>
                        <h1 className="mb-6 lg:text-5xl md:text-3xl text-2xl text-white font-bold">Discover an exceptional cooking<br></br> class tailored for you!</h1>
                        <p className="mb-10">
                        Learn how we shape the culinery vision by making everyone fall in love with the magic of cooking
                        </p>
                        <div className="flex justify-center items-center gap-x-3">
                            <div><button className="btn bg-[#0BE58A] px-5 py-3 rounded-3xl text-black">Explore Now</button></div>
                            <div><button className="btn btn-outline border-[1px] border-white text-white px-5 py-3 rounded-3xl">Our feedback</button></div>
                            

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;