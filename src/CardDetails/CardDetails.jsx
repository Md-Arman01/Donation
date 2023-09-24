import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const {id} = useParams()
    const idInt = parseInt(id)
    const cardsDetails = useLoaderData()
    const cardDetails  = cardsDetails?.find(card => card.id === idInt)
    const {image, title, description} = cardDetails || {}



    return (
        <div className="container mx-auto">
            <img className="w-full rounded-3xl h-[700px]" src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default CardDetails;