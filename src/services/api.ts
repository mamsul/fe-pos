import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ENV } from '../lib/constant';

class Api {
  private http: AxiosInstance;
  private BASE_URL = ENV.baseURL;

  constructor() {
    this.http = axios.create({
      baseURL: this.BASE_URL,
      withCredentials: false,
    });
  }

  private async request<T>(
    method: HttpMethod,
    url: string,
    options: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });

      return response.data;
    } catch (error) {
      return this.normalizeError(error);
    }
  }

  public async get<T>(url: string, params?: Params): Promise<T> {
    return this.request<T>('GET', url, {
      params,
    });
  }

  public async post<T, P>(
    url: string,
    payload: P,
    params?: Params,
  ): Promise<T> {
    return this.request<T>('POST', url, {
      params,
      data: payload,
    });
  }

  public async update<T, P>(
    url: string,
    payload: P,
    params?: Params,
  ): Promise<T> {
    return this.request<T>('PUT', url, {
      params,
      data: payload,
    });
  }

  public async delete<T>(url: string, params?: Params): Promise<T> {
    return this.request<T>('DELETE', url, {
      params,
    });
  }

  private normalizeError(error: any) {
    return Promise.reject(error);
  }
}

export default new Api();
