import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { getAuthData } from './storage';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';

type LoginData = {
    username : string;
    password : string;
}

export const requestBackendLogin = (loginData : LoginData) => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify({
        ...loginData, /*username e password */
        grant_type : 'password'
    });

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data: data, headers: headers})
}

export const requestBackend = (config : AxiosRequestConfig) => {

    const headers = config.withCredentials ? {
        ...config.headers, // aproveita o que já tinha no headers, que foi passado, e acrescenta no authorization
        Authorization : "Bearer " + getAuthData().access_token
    } : config.headers;

    return axios({...config, baseURL: BASE_URL, headers});
}