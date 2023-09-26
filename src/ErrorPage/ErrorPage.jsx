import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
    const backBtn = () =>{
        navigate(-1)
    }
  return (
    <div>
      <img
        className="relative w-full h-screen"
        src="https://i.ibb.co/bdyqvhd/Screenshot-29.png"
        alt=""
      />
      <button
      onClick={backBtn}
        className="absolute bottom-[120px] right-[390px] w-[266px] h-[85px] middle none center text-2xl rounded-lg bg-[#F6CA13] py-3 px-6 font-sans  font-semibold uppercase text-white shadow-md shadow-[#F6CA13]/20 transition-all hover:shadow-lg hover:shadow-[#F6CA13]/40  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true">
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
