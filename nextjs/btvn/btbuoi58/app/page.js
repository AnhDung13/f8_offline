import ListProducts from "./components/ListProducts/ListProducts";
export const metadata = {
  title: "Shop Quần Áo",
  description: "Siêu rẻ đẹp",
};
export default function Home() {
  return (
    <>
      <ListProducts />
    </>
  );
}
