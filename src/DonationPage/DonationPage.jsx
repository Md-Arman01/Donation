import { useEffect, useState } from "react";
import DonateCard from "../DonateCard/DonateCard";


const DonationPage = () => {

    const [cards, setCards] = useState([])
    const [noDonate, setNoDonate] = useState()
    const [isShow, setIsShow] = useState(false)
    
    useEffect(()=>{
        const getCards = JSON.parse(localStorage.getItem('card'))
        if(!getCards){
            setNoDonate('No Donate Found')
        }else{
            setCards(getCards)
        }
    },[])
    


    return (
        <div className="container mx-auto px-4 lg:px-0 md:my-20">
            {
                noDonate? <p className="flex justify-center items-center h-[400px] text-3xl font-semibold">{noDonate}</p> : <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    isShow? cards?.map((card, index) => <DonateCard key={index} card={card}></DonateCard>)
                    :
                    cards?.slice(0, 4).map((card, index) => <DonateCard key={index} card={card}></DonateCard>)
                }
            </div>
            }
            
            {
                cards.length > 4 &&
            <div onClick={()=> setIsShow(!isShow)} className="flex justify-center my-7">
                <button className="btn normal-case bg-[#009444] hover:bg-[#48a875] text-white w-40">{isShow? "See Less" : "See All"}</button>
            </div>
            }

        </div>
    );
};

export default DonationPage;