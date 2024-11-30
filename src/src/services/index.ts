import axios from "axios";
import { toast } from "react-toastify";

import { refreshAccessToken } from "./auth";

interface RequestOptions {
  body?: any;
  query?: any;
  baseURL?: string;
  endpoint: string;
  allowRefresh?: boolean;
  headers?: Record<string, string>;
  method?: "GET" | "PUT" | "POST" | "PATCH" | "DELETE";
}

let isRefreshing = false;

const apiClient = async ({
  body,
  query,
  baseURL,
  headers,
  endpoint,
  method = "GET",
  allowRefresh = true,
}: RequestOptions) => {
  try {
    const token = localStorage.getItem("accessToken");

    const options: any = {
      method,
      url: endpoint,
      timeout: 60 * 1000,
      withCredentials: true,
      baseURL: baseURL || process.env.REACT_APP_API_BASE_URL,
      headers: headers || { "Content-Type": "application/json" },
    };

    if (body) options.data = body;
    if (query) options.params = query;
    if (token) options.headers = { ...options.headers, Authorization: token };

    const { data } = await axios(options);

    return data;
  } catch (err: any) {
    let message = err.message;

    if (err.response) {
      if (allowRefresh && !isRefreshing && err.response.status === 401) {
        isRefreshing = true;

        await refreshAccessToken().finally(() => (isRefreshing = false));

        const data: any = await apiClient({
          body,
          query,
          method,
          baseURL,
          headers,
          endpoint,
          allowRefresh: false,
        });

        return { data };
      }

      message = err.response.data.message;
    } else {
      if (err.request) message = "Can't send request to server";
    }

    toast.error(message);
  }
};

export default apiClient;
