
// import PropTypes from "prop-types"

const Banner = () => {
  

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[400px] md:mt-[700px]">
      
      </div>
      <div
        className="hero h-[500px] md:h-[700px] absolute top-0 "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/bJmwDSS/depositphotos-431561824-stock-photo-young-diverse-volunteer-group-smiling.jpg",
        }}>
        <div className="hero-overlay bg-white  bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col items-center">
            <h1 className="mb-2 md:mb-10 text-2xl md:text-4xl lg:text-5xl font-semibold text-black ">
              I Grow By Helping People In Need
            </h1>
            <div className="form-control ">
              <form className="input-group">
                <input
                  type="search"
                  name="search"
                  placeholder="Search here...."
                  className="input input-bordered w-[200px] md:w-[450px] text-black"
                />
                <input type="submit" value="Search" className="btn bg-[#FF444A] normal-case text-white  hover:bg-[#ff444ac7]"/>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes ={
  
}

export default Banner;
