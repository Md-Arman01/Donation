import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Card = ({ cardData }) => {
  const {id,image, title, category, category_bg, card_bg, text_color, button_bg, description, price} = cardData || {}

  


  return (
    <NavLink to={`/cardDetails/${id}`}>
            <div>
      <div className="card card-compact rounded-lg bg-red-100">
        <figure>
          <img
          className="w-full rounded-sm"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
        <h2 className='bg-red-200 text-red-500 text-xs w-fit px-2 py-1 rounded-md'>{category}</h2>
        <p className="text-xl font-semibold text-red-500">{title}</p>
          
        </div>
      </div>
    </div>
    </NavLink>
    
  );
};

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
};

export default Card;
