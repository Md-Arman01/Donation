import Pages from "../Pages/Pages";
import logo from "../assets/Logo.png";

const Navber = () => {
  return (
    <div>
      <div className="sticky z-50 container mx-auto my-10 flex justify-between items-center">
        <div className="flex justify-center md:justify-start w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full gap-5 md:px-4">
            <img src={logo} />
            <div className="lg:hidden">
              <Pages></Pages>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Pages></Pages>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
