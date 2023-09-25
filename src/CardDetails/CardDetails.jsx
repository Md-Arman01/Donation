import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const CardDetails = () => {

    const {id} = useParams()
    const idInt = parseInt(id)
    const cardsDetails = useLoaderData()
    const cardDetails  = cardsDetails?.find(card => card.id === idInt)
    const {image, title, description , price , button_bg} = cardDetails || {}



    const handleDonate =() =>{
        const allCards = []

        const getCards = JSON.parse(localStorage.getItem('card'))
        if(!getCards){
            allCards.push(cardDetails)
            localStorage.setItem('card' , JSON.stringify(allCards))
            swal("Donate Successfull", "Your card has been added donation page", "success");
        }else{
            const isExits = getCards.find(card => card.id === idInt)
            if(isExits){
                swal("This card allready donated!", "You don't added this card", "error");
                
            }else{
                allCards.push(...getCards, cardDetails)
                localStorage.setItem('card' , JSON.stringify(allCards))
                swal("Donate Successfull", "Your card has been added donation page", "success");
            }
        }
        console.log(allCards)
        


    }


    return (
        <div className="container mx-auto my-10 px-4 lg:px-0">
            <div className="relative">
            <img className="w-full rounded-3xl md:h-[700px]" src={image} alt="" />
            <p className="absolute bottom-0 bg-black w-full py-10 md:py-16 rounded-b-3xl opacity-50"></p>
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10">
            <button onClick={handleDonate} style={{background: button_bg, border: button_bg }} className=" btn normal-case text-white  md:px-6">Donate $ {price}</button>
            </div>
            </div>
            <h1 className="text-3xl font-extrabold mt-4 md:mt-10 px-1 md:px-0">{title}</h1>
            <p className="text-xs text-[#545454] my-2 md:my-5 px-1 md:px-0">{description}</p>
        </div>
    );
};

export default CardDetails;