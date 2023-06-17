import API_ENDPOINTS from './apiEndpoints';
import responsehandler from './responseHandler';

export interface IPost {
  title: string;
  body: string;
  tags: string[];
  id: number;
}

export interface IPostResponse {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}

const authApi = {
  getProducts: async () => {
    const response = await fetch(API_ENDPOINTS.GET_PRODUCTS, {
      method: 'GET',
    });
    return responsehandler(response);
  },
  getPosts: async (skip: number, limit: number) => {
    const response = await fetch(API_ENDPOINTS.GET_POSTS(skip, limit), {
      method: 'GET',
    });
    return responsehandler(response);
  },
};

export default authApi;
