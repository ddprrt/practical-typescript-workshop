import { Client, RequestOptions } from "./client.interface";

export class FetchClient implements Client {
  async request<T>(url: string, options: RequestOptions = {}): Promise<T> {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}
