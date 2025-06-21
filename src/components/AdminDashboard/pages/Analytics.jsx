import React from 'react';
import { FaChartLine, FaUserFriends, FaShoppingCart } from 'react-icons/fa';
import { FaUsers, FaUserPlus } from 'react-icons/fa';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const statsData = [
  {
    title: 'Customers',
    value: 241,
    icon: <FaUsers className="text-blue-500" />,
  },
  {
    title: 'Orders',
    value: 365,
    icon: <FaShoppingCart className="text-red-500" />,
  },
  {
    title: 'Signups',
    value: 1325,
    icon: <FaUserPlus className="text-green-500" />,
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
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
export default function Analytics() {

  const chartData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'فروش ماهیانه',
        data: [500, 700, 1000, 850, 1300, 1100],
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="">
      {/* کارت‌ها */}
      <div className="grid grid-cols-2 ">
        <StatsCards />
      </div>

      {/* نمودار */}
      <div className="bg-base-100 w-1/2 p-6 rounded-xl shadow border border-base-200">
        <h3 className="text-lg font-semibold mb-4">آمار فروش ۶ ماه گذشته</h3>
        <div className=" h-[300px] md:h-[400px]">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
}; 
