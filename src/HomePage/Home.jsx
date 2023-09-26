import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Cards/Card";
import { useState } from "react";
import SearchCard from "../SearchCard/SearchCard";


const Home = () => {
    const allCardData = useLoaderData()

    const [searchField, setSearchField] = useState('')

    const handleSearch = e => {
        e.preventDefault()
        setSearchField(e.target.search.value)
      }
    const similarCard =   allCardData.filter(card => card.category === searchField)

    



    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>

            {
                searchField.length > 0 ? <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20 px-4 lg:px-0">
                {
                    similarCard?.map((card, index) => <SearchCard key={index} card={card}></SearchCard>)
                }
                </div> : 
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20 px-4 lg:px-0">
            {
                allCardData?.map((cardData, index) => <Card key={index} cardData={cardData}></Card>)
            }
            </div>
            }

            
            
        </div>
    );
};

export default Home;