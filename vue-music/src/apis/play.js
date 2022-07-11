import request from '@/utils/request';

export const getInfoApi = (params) =>
  request({
    method: 'GET',
    url: '/song/detail',
    params,
  });

export const playMusicApi = (params) =>
  request({
    method: 'GET',
    url: '/song/url',
    params,
  });
