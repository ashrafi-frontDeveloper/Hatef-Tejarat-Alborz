import { FaUsers, FaGlobe, FaHandshake, FaMoneyBillWave } from 'react-icons/fa';

const stats = [
  {
    icon: <FaHandshake className="w-10 h-10 text-primary mb-4" />,
    title: "Verified Suppliers",
    value: "2,500+",
  },
  {
    icon: <FaUsers className="w-10 h-10 text-primary mb-4" />,
    title: "Active Buyers",
    value: "2,000+",
  },
  {
    icon: <FaGlobe className="w-10 h-10 text-primary mb-4" />,
    title: "Countries",
    value: "75+",
  },
  {
    icon: <FaMoneyBillWave className="w-10 h-10 text-primary mb-4" />,
    title: "Monthly Transactions",
    value: "$50M+",
  },
];

const Trusted = () => {
  return (
    <section className="py-16 bg-white border-t border-neutral/10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Trusted by Businesses Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-xl bg-neutral/5 border border-neutral/10 p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center items-center">
                {stat.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral group-hover:text-primary transition-colors">
                {stat.title}
              </h3>
              <p className="mt-2 text-2xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
