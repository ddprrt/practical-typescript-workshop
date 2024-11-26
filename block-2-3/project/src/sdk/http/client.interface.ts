export interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

export interface Client {
  request<T>(url: string, options?: RequestOptions): Promise<T>;
}
