import ProductDetails from "./ProductDetail";

export const metadata = {
  title: "Quần áo",
  description: "Siêu rẻ đẹp",
};
export default function ProductPage({ params }) {
  return <ProductDetails id={params.id} />;
}
