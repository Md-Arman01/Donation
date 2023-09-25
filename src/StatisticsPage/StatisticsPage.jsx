import { useEffect, useState } from "react";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'


const StatisticsPage = () => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        const getCards = JSON.parse(localStorage.getItem('card'))
            setCards(getCards)
    },[])
    console.log(cards)

    
    const COLORS = ['#dd1616', '#dd1616']
  return (
    <React.Fragment>
        <h1>welcome to piechart</h1>
        <PieChart width={400} height={400}>
          <Pie
            data={cards}
            cx="50%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {cards.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    </React.Fragment>
  );
};

export default StatisticsPage;