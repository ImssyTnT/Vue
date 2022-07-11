import { getRecommendList, newSongList } from './home';
import { getSearchTagApi, getSearchListApi } from './search';
import { getInfoApi, playMusicApi } from './play';
export const getRecommendListApi = getRecommendList;
export const newSongListApi = newSongList;
export const getSearchTag = getSearchTagApi;
export const getSearchList = getSearchListApi;
export const getInfo = getInfoApi;
export const playMusic = playMusicApi;
