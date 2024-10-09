// export const metadata = {
//   title: "f9",
//   description: "f9 - product list",
// };

import axios from "axios";

export default async function Home() {
  // const [products, setProducts] = useState([]);
  // const fetchProducts = async () => {
  //   try {
  //     const res = await axios.get("https://api.escuelajs.co/api/v1/products");
  //     setProducts(res.data);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  const res = await axios.get(
    "https://api-exercise-sopi.vercel.app/api/v1/products"
  );
  console.log(res);

  const products = res.data.data.listProduct;
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}
