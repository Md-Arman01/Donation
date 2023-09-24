const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[700px] absolute top-0 -z-50"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/bJmwDSS/depositphotos-431561824-stock-photo-young-diverse-volunteer-group-smiling.jpg",
        }}>
        <div className="hero-overlay bg-white  bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col items-center">
            <h1 className="mb-10 text-5xl font-semibold text-black ">
              I Grow By Helping People In Need
            </h1>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search here...."
                  className="input input-bordered w-[450px]"
                />
                <button className="btn bg-[#FF444A] normal-case text-white  hover:bg-[#ff444ac7]">
                Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
