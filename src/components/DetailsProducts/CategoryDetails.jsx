import { useParams } from "react-router-dom";
import productCategories from "../../data/ProductData/ProductData";
import { Link } from "react-router-dom";

const CategoryDetails = () => {
  const { categorySlug } = useParams();
  const category = productCategories.find(cat => cat.slug === categorySlug);

  if (!category) return <p className="p-6 text-red-600">دسته مورد نظر پیدا نشد</p>;

  return (
    <>
        <div className="max-w-7xl mx-auto p-6">
            <div>
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center gap-x-2 shadow-md border border-secondary rounded-2xl overflow-hidden md:h-[550px]">
                        {/* Right: Image */}
                        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center">
                        <img
                            src={category.img}
                            alt='Cold rolled carbon steel'
                            className="w-full h-full object-cover"
                        />
                        </div>

                        {/* Left: Content */}
                        <div className="w-full md:w-1/2 h-full p-4 flex flex-col justify-between space-y-5">
                        <h2 className="text-xl md:text-3xl font-bold text-white pt-2">{ category.category }</h2>
                        
                        {/* descriptions */}
                        <div className="">
                            <div className="collapse collapse-arrow bg-base-100 border border-white/20">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <label className="collapse-title font-semibold">INTRODUCE:</label>
                                <div className="collapse-content text-sm">{category.introduce}</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-white/20">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">ADVANTAGE:</div>
                                <div className="collapse-content text-sm">{category.advantage}</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-white/20">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">APPLICATION:</div>
                                <div className="collapse-content text-sm">{category.application}</div>
                            </div>

                        </div>  

                        {/* <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table">
                            head
                            <thead>
                                <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                row 1
                                <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                </tr>
                                row 2
                                <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                </tr>
                                row 3
                                <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                                </tr>
                            </tbody>
                            </table>
                        </div> */}

                        {/* link request */}
                        <Link
                            to="/order"
                            className="mt-4 text-base md:text-lg font-bold px-4 py-2 text-secondary bg-white rounded-xl text-center hover:bg-secondary hover:text-white transition-all duration-300"
                        >
                            Order
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {category.products.map(product => (
                <div key={product.id} className="border rounded-xl shadow-md p-4">
                    <img src={product.img} alt={product.name} className="rounded-md mb-3 h-40 w-full object-cover" />
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-sm line-clamp-3">{product.description}</p>
                    <Link
                    to={`/products/details/${product.slug}`}
                    className="inline-block mt-2 px-3 py-1 bg-secondary text-white rounded text-sm"
                    >
                    View Details
                    </Link>
                </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default CategoryDetails;
