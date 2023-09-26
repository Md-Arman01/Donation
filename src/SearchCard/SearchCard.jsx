import { NavLink } from "react-router-dom";


const SearchCard = ({card}) => {
    const {id,image, title, category, category_bg, card_bg, text_color} = card || {}
    console.log(card)
    return (
        <NavLink to={`/cardDetails/${id}`}>
            <div>
      <div style={{background: card_bg}} className="card card-compact rounded-lg">
        <figure>
          <img
          className="w-full rounded-sm"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
        <h2 style={{background: category_bg, color: text_color}} className='font-medium text-xs w-fit px-2 py-1 rounded-md'>{category}</h2>
        
        <p style={{color: text_color}} className="text-xl font-semibold">{title}</p>
          
        </div>
      </div>
    </div>
    </NavLink>
    );
};

export default SearchCard;