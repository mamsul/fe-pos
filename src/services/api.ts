import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { ENV } from '../lib/constant';

class Api {
  private http: AxiosInstance;
  private BASE_URL = ENV.baseURL;

  constructor() {
    this.http = axios.create({
      baseURL: this.BASE_URL,
      withCredentials: false,
      headers: this.setupHeaders(),
    });

    this.injectInterceptors();
  }

  // Get authorization token for requests
  private get getAuthorization() {
    const accessToken = Cookies.get('accessToken') || '';
    return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  }

  // Set up request headers
  private setupHeaders(hasAttachment = false) {
    return hasAttachment
      ? { 'Content-Type': 'multipart/form-data', ...this.getAuthorization }
      : { 'Content-Type': 'application/json', ...this.getAuthorization };
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

  public async get<T>(
    url: string,
    params?: IParams,
    hasAttachment = false,
  ): Promise<T> {
    return this.request<T>('GET', url, {
      headers: this.setupHeaders(hasAttachment),
      params,
    });
  }

  public async post<T, P>(
    url: string,
    payload: P,
    params?: IParams,
    hasAttachment = false,
  ): Promise<T> {
    return this.request<T>('POST', url, {
      headers: this.setupHeaders(hasAttachment),
      params,
      data: payload,
    });
  }

  public async update<T, P>(
    url: string,
    payload: P,
    params?: IParams,
  ): Promise<T> {
    return this.request<T>('PUT', url, {
      params,
      data: payload,
    });
  }

  public async patch<T, P>(
    url: string,
    payload: P,
    params?: IParams,
  ): Promise<T> {
    return this.request<T>('PATCH', url, {
      params,
      data: payload,
    });
  }

  public async delete<T>(url: string, params?: IParams): Promise<T> {
    return this.request<T>('DELETE', url, {
      params,
    });
  }

  // ==================================================================================================
  // ========================================== INTERCEPTORS ==========================================

  // Inject interceptors for request and response
  private injectInterceptors() {
    // Set up request interceptor
    this.http.interceptors.request.use((request) => {
      // * Perform an action
      // TODO: implement an NProgress
      return request;
    });

    // Set up response interceptor
    this.http.interceptors.response.use(
      (response) => {
        // * Do something
        return response;
      },

      async (error) => {
        // * Implement a global error alert
        // TODO: implement toast alert to display message

        // * Handle for refresh token
        const originalRequest = error.config;
        if (
          error.response &&
          error.response.status === 401 &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          try {
            // Refresh token
            const refreshedToken = await this.refreshToken();

            // Implement your refresh token logic here
            // Update token in cookies or wherever you store it
            Cookies.set('accessToken', refreshedToken.accessToken, {
              secure: true,
            });
            Cookies.set('refreshToken', refreshedToken.refreshToken, {
              secure: true,
            });

            // Retry original request with new token
            originalRequest.headers.Authorization = `Bearer ${refreshedToken.accessToken}`;
            return this.http(originalRequest);
          } catch (refreshError) {
            // Handle refresh token error
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      },
    );
  }

  private async refreshToken() {
    // Implement your refresh token logic
    // Make a request to backend to refresh the token
    const refreshToken = Cookies.get('refreshToken');

    try {
      const res = await this.post<IApiResponse<IUser>, any>(
        '/admin/refreshtoken',
        {
          refreshToken,
        },
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  // ==================================================================================================
  // ========================================== NORMALIZE ERROR =======================================

  private normalizeError(error: any) {
    return Promise.reject(error);
  }
}

export default new Api();
