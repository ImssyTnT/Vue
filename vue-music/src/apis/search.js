import request from '@/utils/request';

export const getSearchTagApi = (params) =>
  request({
    method: 'GET',
    url: '/search/hot',
    params,
  });
export const getSearchListApi = (params) =>
  request({
    method: 'GET',
    url: '/cloudsearch',
    params,
  });
