import React from 'react';
// import axios from 'axios';
import ListProducts from '@/components/products/ListProducts';
import queryString from 'query-string';



// const getProducts = async () => {
//   const { data } = await axios.get(`${process.env.API_URL}/api/products`);
//   return data;
// }

const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);
  console.log('search query: ', searchQuery);

  const response = await fetch(`${process.env.API_URL}/api/products?${searchQuery}`)
  const data = await response.json();
  // setComments(data);
  return data;
}


const HomePage = async ({ searchParams }) => {
  const productData = await getProducts(searchParams);
  return (
    <ListProducts data={productData} />
  )
}

export default HomePage;