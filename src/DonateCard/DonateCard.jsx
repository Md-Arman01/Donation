import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";

const DonateCard = ({card}) => {
    const {id,image, title, category, price,  category_bg, card_bg, text_color, button_bg} = card || {}

    return (
        <div>
            <div className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6 space-y-1">
  <h2 className='bg-red-200 text-red-500 text-xs w-fit px-2 py-1 rounded-md'>{category}</h2>
  <p className="text-xl font-semibold text-black">{title}</p>
    <p className="text-red-500">${price}.00</p>
    <NavLink to={`/cardDetails/${id}`}>
    <button className="btn normal-case px-7">View Details</button>
    </NavLink>
  </div>
</div>
        </div>
    );
};

DonateCard.propTypes ={
    card: PropTypes.object.isRequired
}
export default DonateCard;