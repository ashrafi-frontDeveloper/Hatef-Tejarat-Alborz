import React from 'react'
import LatestTickets from './LatestTickets';
import TicketStatusChart from './TicketStatusChart';
import TopProducts from './TopProducts';
import { FaUsers, FaShoppingCart, FaUserPlus } from 'react-icons/fa';

const statsData = [
  {
    title: 'Customers',
    value: 1345,
    icon: <FaUsers className="text-blue-500" />,
  },
  {
    title: 'Orders',
    value: 892,
    icon: <FaShoppingCart className="text-red-500" />,
  },
  {
    title: 'Signups',
    value: 241,
    icon: <FaUserPlus className="text-green-500" />,
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {statsData.map((stat, index) => (
        <div key={index} className="bg-base-300 p-6 rounded-xl shadow-md">
          <div className="text-white font-semibold mb-1 flex items-center gap-2">
            {stat.icon}
            {stat.title}
          </div>
          <div className="text-3xl font-bold text-white">
            {stat.value.toLocaleString()}
            <span
              className={'ml-3 text-sm font-semibold'}
            >
            </span>
          </div>
          <div className="text-sm text-Neutral868686 mt-1">
            Until today
          </div>
        </div>
      ))}
    </div>
  );
};


function Home() {
  return (
    <div className="p-4">
      <StatsCards />
      <LatestTickets /> 
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <TicketStatusChart />
        <TopProducts />
    </div>

    </div>
  );
}

export default Home