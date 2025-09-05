import { FaShoppingCart } from "react-icons/fa";
import shoes from "./../assets/shoes.png";
const products = [
  {
    id: 1,
    title: "Product Title",
    price: 328,
    discount: "-40%",
    image: "{shoes}",
  },
  {
    id: 2,
    title: "Product Title",
    price: 328,
    discount: "-40%",
    image: "{shoes}",
  },
  {
    id: 3,
    title: "Product Title",
    price: 328,
    discount: "-40%",
    image: "{shoes}",
  },
  {
    id: 4,
    title: "Product Title",
    price: 328,
    discount: "-40%",
    image: "s{shoes}",
  },
  {
    id: 5,
    title: "Product Title",
    price: 328,
    discount: "-40%",
    image: "{shoes}",
  },
  {
    id: 6,
    title: "Product Title",
    price: 328,
    discount: "-40%",
    image: "{shoes}",
  },
  {
    id: 7,
    title: "Product Title",
    price: 328,
    discount: "-40%",
    image: "{shoes}",
  },
  {
    id: 8,
    title: "Product Title",
    price: 328,
    discount: "-40%",
    image: "{shoes}",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="relative inline-block text-3xl font-bold mb-8 p-4 text-start">
        Featured Products
        <span className="absolute left-4 bottom-0 w-1/3 h-[4px] bg-gradient-to-r from-blue-600 to-pink-500"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-sky-100 shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            {/* Discount Badge */}
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}
            </span>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-6"
            />

            {/* Product Info */}
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>

            {/* Add to Cart */}
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              <FaShoppingCart /> Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
