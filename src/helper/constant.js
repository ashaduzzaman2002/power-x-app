import axios from "axios";

export const baseURL = 'https://vedicpetsclinicandsurgerycentre.com';

export const dbObject = axios.create({
    withCredentials: true,
    baseURL: 'https://vedicpetsclinicandsurgerycentre.com'
});