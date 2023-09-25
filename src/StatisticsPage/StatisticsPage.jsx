import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer  } from 'recharts';


const StatisticsPage = () => {
  const [cards, setCards] = useState([])

  useEffect(()=>{
      const getCards = JSON.parse(localStorage.getItem('card'))
      if(!getCards){
        setCards([])
      }else{

        setCards(getCards)
      }

  },[])

  
  const myParcent = (cards.length / 12) * 100
  const total = 100 - myParcent;
  const objct = [{value: total} , {value: myParcent}]
  

  console.log(cards)

  const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};
  return (
    <div className='container mx-auto h-[400px]  flex flex-col justify-center items-center md:100%'>
       <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={200} >
          <Pie
            data={objct}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {objct.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col md:flex-row gap-5">
        <div className="flex gap-2 items-center">
        <h1 className="text-sm font-medium">Your Donation</h1>
        <p className="bg-[#00C49F] h-2 w-16"></p>
        </div>
        <div className="flex gap-2 items-center">
        <h1 className="text-sm font-medium">Total Donation</h1>
        <p className="bg-[#FF444A] h-2 w-16"></p>
        </div>
        </div>
    </div>
  );
};

export default StatisticsPage;
