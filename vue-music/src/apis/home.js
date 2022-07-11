import request from '@/utils/request';
export const getRecommendList = (params) =>
  request({
    method: 'GET',
    url: '/personalized',
    params,
  });

export const newSongList = (params) =>
  request({
    method: 'GET',
    url: '/personalized/newsong',
    params,
  });
  