import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import data from "@/utils/data";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
      <Layout title={product.name}>
        <div className="py-2">
          <Link href="/">Back to result</Link>
        </div>
        <div className="grid grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              Layout="responsive"
            />
          </div>
          <div>
            <ul>
              <li>
                <h1 className="text-lg font-bold">{product.name}</h1>
              </li>
              <li>Category: {product.name}</li>
              <li>Brand: {product.brand}</li>
              <li>Rating: {product.rating} Stars ({product.numReviews} Reviews)</li>
              <li>Description: {product.description}</li>
            </ul>
          </div>
          <div>
            <div className="card p-5">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable' }</div>
              </div>
              <button className="primary-button w-full">Add to Cart</button>
            </div>
          </div>
        </div>
      </Layout>
  );
}
