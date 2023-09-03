'use client';

import React from 'react';
import ProductDetails from '@/components/products/ProductDetails';

const getProductsDetails = async (id) => {
  const response = await fetch(`${process.env.API_URL}/api/products/${id}`)
  const data = await response.json();
  return data?.product;
}

const ProductDetailsPage = async ({ params }) => {
  const product = await getProductsDetails(params.id)
  return (
    <ProductDetails product={product} />
  )
}

export default ProductDetailsPage;