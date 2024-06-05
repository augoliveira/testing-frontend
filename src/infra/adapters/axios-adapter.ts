import axios from 'axios';

import { HttpClient, HttpRequest } from '../http';

export class AxiosHttpClientAdapter implements HttpClient {
  async request(data: HttpRequest) {
    const response = await axios.request({
      url: data.url,
      method: data.method,
      data: data.body
    });

    return response.data;
  }
}
