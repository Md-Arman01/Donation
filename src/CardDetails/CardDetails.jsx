import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const {id} = useParams()
    const idInt = parseInt(id)
    const cardsDetails = useLoaderData()
    const cardDetails  = cardsDetails?.find(card => card.id === idInt)
    const {image, title, description , price} = cardDetails || {}



    return (
        <div className="container mx-auto my-10">
            <div className="relative">
            <img className="w-full rounded-3xl h-[700px]" src={image} alt="" />
            <p className="absolute bottom-0 bg-black w-full py-16 rounded-b-3xl opacity-50"></p>
            <div className="absolute bottom-10 left-10">
            <button className=" btn normal-case bg-red-600 text-white px-6">Donate $ {price}</button>
            </div>
            </div>
            <h1 className="text-3xl font-extrabold mt-10">{title}</h1>
            <p className="text-xs text-[#545454] my-5">{description}</p>
        </div>
    );
};

export default CardDetails;