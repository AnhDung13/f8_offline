import Link from "next/link";

export default function () {
  return (
    <div>
      <Link href="/admin/product">Product</Link>
      <Link href="/admin/category">Category</Link>
    </div>
  );
}
