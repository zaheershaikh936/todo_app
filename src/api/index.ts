import "/config";

import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from "axios";

type ApiResponse<T> = {
  data: any;
  status: number;
  message: string;
};

type ApiError = {
  message: string;
  status?: number;
};

type CallApiConfigTypes = AxiosRequestConfig & {
  authToken?: string;
  googleToken?: string;
};

class ApiCalls {
  private instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        ...(config?.headers || {}),
      },
      ...config,
    });
  }

  private handleError(error: AxiosError): ApiError {
    if (error.response) {
      return {
        message: (error.response.data as { message: string }).message,
        status: (error.response.data as { status: number }).status,
      };
    } else if (error.request) {
      return {
        message: "No response received from the server",
        status: 500,
      };
    } else {
      return {
        message: error.message,
        status: 500,
      };
    }
  }

  public async callApi<T>(config: CallApiConfigTypes): Promise<ApiResponse<T>> {
    try {
      console.log("calling api call of header");

      const headers = {
        authorization: config.authToken,
        ...(config.headers || {}),
      };
      const response: AxiosResponse = await this.instance.request<T>({
        ...config,
        ...headers,
      });

      return {
        data: response.data.data,
        status: response.data.status,
        message: response.data.message,
      };
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  public async get<T>(
    apiCallConfig: CallApiConfigTypes
  ): Promise<ApiResponse<T>> {
    apiCallConfig.method = "GET";
    return await this.callApi<T>(apiCallConfig);
  }

  public async post<T>(
    apiCallConfig: CallApiConfigTypes
  ): Promise<ApiResponse<T>> {
    apiCallConfig.method = "POST";
    return await this.callApi<T>(apiCallConfig);
  }

  public async put<T>(
    apiCallConfig: CallApiConfigTypes,
    data?: any
  ): Promise<ApiResponse<T>> {
    apiCallConfig.method = "PUT";
    apiCallConfig.data = data;
    return await this.callApi<T>(apiCallConfig);
  }

  public async delete<T>(
    apiCallConfig: CallApiConfigTypes
  ): Promise<ApiResponse<T>> {
    apiCallConfig.method = "DELETE";
    return await this.callApi<T>(apiCallConfig);
  }
}

const apiConfig = new ApiCalls();

export default apiConfig;
