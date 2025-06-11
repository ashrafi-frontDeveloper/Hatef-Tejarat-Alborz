import { FaUsers, FaGlobe, FaHandshake, FaMoneyBillWave } from 'react-icons/fa';

const stats = [
  { icon: <FaHandshake className="text-3xl text-blue-500 mx-auto mb-2" />, title: "Verified Suppliers", value: "2,500+" },
  { icon: <FaUsers className="text-3xl text-blue-500 mx-auto mb-2" />, title: "Active Buyers", value: "2,000+" },
  { icon: <FaGlobe className="text-3xl text-blue-500 mx-auto mb-2" />, title: "Countries", value: "75+" },
  { icon: <FaMoneyBillWave className="text-3xl text-blue-500 mx-auto mb-2" />, title: "Monthly Transactions", value: "$50M+" }
];

const Trusted = () => {
  return (
    <div className="bg-base-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Trusted by Businesses Worldwide
          </h2>
        </div>
        <div className="mt-10">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-base-300 overflow-hidden shadow rounded-lg p-6 text-center hover:shadow-md transition duration-300"
              >
                {stat.icon}
                <dt className="text-lg font-medium text-gray-500">{stat.title}</dt>
                <dd className="mt-1 text-3xl font-semibold text-blue-600">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
