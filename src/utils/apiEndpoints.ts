const BASE_URL = 'https://dummyjson.com';

const API_ENDPOINTS = {
  GET_PRODUCTS: `${BASE_URL}/products`,
  GET_POSTS: (skip: number, limit: number) =>
    `${BASE_URL}/posts?skip=${skip}&limit=${limit}`,
};

export default API_ENDPOINTS;
