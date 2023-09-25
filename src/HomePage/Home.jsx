import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Cards/Card";


const Home = () => {
    const allCardData = useLoaderData()



    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {
                allCardData?.map((cardData, index) => <Card key={index} cardData={cardData}></Card>)
            }
            </div>
        </div>
    );
};

export default Home;