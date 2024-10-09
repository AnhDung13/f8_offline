import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>products</h1>
      <Link href="/products/detail/1">product 1</Link>
    </div>
  );
}
