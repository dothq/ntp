import axios from 'axios';

export const fetcher = (url: any) => axios.get(url).then((res) => res.data);
