import { HttpClient, HttpRequest } from '../http';

export class FetchHttpClientAdapter implements HttpClient {
  async request(data: HttpRequest) {
    const response = await fetch(data.url, {
      method: data.method,
      body: data.body
    });
    return await response.json();
  }
}
