"use client";
import { useRouter } from "next/navigation";

export default function Products() {
  const route = useRouter();
  return (
    <>
      <h1>this is Products page</h1>
      <button
        onClick={() => {
          route.push("/products/123");
        }}
      >
        Click me
      </button>
    </>
  );
}
