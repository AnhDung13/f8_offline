import ProductDetails from "./ProductDetail";

export async function generateMetaData({ params }) {
  const res = await fetch("https://jt565c-8080.csb.app/products", {
    params: {
      id: params.id,
    },
  });
  console.log(res.data);

  return {
    title: res.data[0].name,
  };
}

export default function ProductPage({ params }) {
  return <ProductDetails id={params.id} />;
}
