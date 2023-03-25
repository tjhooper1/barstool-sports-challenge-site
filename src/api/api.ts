import axios, { AxiosError, CancelToken } from 'axios';
import {API_BASE_URL, DEFAULT_HEADERS, ERROR_MESSAGES} from'./constants';
import {NBA_URL, MLB_URL} from './endpoints';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: DEFAULT_HEADERS,
});

api.interceptors.response.use(
    response => response,
    (error: AxiosError<string, string>) => {
        switch (error.status) {
            case 404:   
            return Promise.reject(ERROR_MESSAGES.notFound);
                
            case 500:
                return Promise.reject(ERROR_MESSAGES.server);
            default:
                return Promise.reject(error.message);
        }
    }
);

export const getNBAData = async (cancelToken: CancelToken): Promise<{data: any}> => {
    const response = await api.get(NBA_URL, {cancelToken});
    return response;
}
export const getMLBData = async (): Promise<{data: any}> => {
    const response = await api.get(MLB_URL);
    return response;
}
