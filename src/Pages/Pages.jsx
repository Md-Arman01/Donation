import { NavLink } from "react-router-dom";

const Pages = () => {
    return (
        <div className="flex gap-7">
            <NavLink to="/" className={({ isActive }) =>isActive ? "text-[#FF444A] underline text-xl font-semibold" : "text-xl font-semibold"}>Home</NavLink>
            <NavLink to="/donation" className={({ isActive }) =>isActive ? "text-[#FF444A] underline text-xl font-semibold" : "text-xl font-semibold"}>Donation</NavLink>
            <NavLink to="/statistics" className={({ isActive }) =>isActive ? "text-[#FF444A] underline text-xl font-semibold" : "text-xl font-semibold"}>Statistics</NavLink>
        </div>
    );
};

export default Pages;