import { useEffect, useState } from "react";
import DonateCard from "../DonateCard/DonateCard";


const DonationPage = () => {

    const [cards, setCards] = useState([])
    const [noDonate, setNoDonate] = useState()
    const [isShow, setIsShow] = useState(4)
    
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
                    cards?.slice(0, isShow).map((card, index) => <DonateCard key={index} card={card}></DonateCard>)
                    
                }
            </div>
            }
            
            {
                cards.length > 4 &&
            <div className={isShow === cards.length && 'hidden'}>
                <div className="flex justify-center my-7">
                <button onClick={() => setIsShow(cards.length)} className="btn normal-case bg-[#009444] hover:bg-[#48a875] text-white w-40">See All</button>
                </div>
            </div>
            }

        </div>
    );
};

export default DonationPage;