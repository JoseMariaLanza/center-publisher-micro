import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await fetch(url).then((response) => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json();
      });
      return data;
    } catch (error) {
      console.log(`Unexpected error ${error}`);
      throw new Error(`Unexpected error ${error}, check logs`);
    }
  }
}
