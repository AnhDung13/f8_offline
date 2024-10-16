"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListProducts() {
  const [listProducts, setListProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await axios.get("https://jt565c-8080.csb.app/products");
    setListProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Sản Phẩm
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listProducts.length === 0 ? (
            <h2>Loading...</h2>
          ) : (
            listProducts.map((product) => (
              <div class="group relative" key={product.id}>
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.img}
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <Link href={`/product/${product.id}`}>
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        {product.name}
                      </Link>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <div>
                    <p class="text-sm line-through font-medium text-gray-900">
                      ${product.price}
                    </p>
                    <p class="text-sm font-medium text-gray-900">
                      ${(product.price * product.discount) / 100}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
