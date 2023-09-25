import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";

const DonateCard = ({card}) => {
    const {id,image, title, category, price,  category_bg, card_bg, text_color, button_bg} = card || {}

    return (
        <div>
            <div  style={{background: card_bg}} className="relative flex w-full  flex-row rounded-xl bg-clip-border ">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
  <div className="space-y-1 mb-4">
  <h2 style={{background: category_bg, color: text_color }} className=' text-red-500 text-xs w-fit px-2 py-1 rounded-md'>{category}</h2>
  <p className="text-xl font-semibold text-black">{title}</p>
  <p style={{color: text_color}} className="font-semibold">${price}.00</p>
  </div>
    <NavLink to={`/cardDetails/${id}`}>
    <button style={{background: button_bg}} className="btn normal-case px-7 text-white">View Details</button>
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