import axios from 'axios';
import Poem from '../models/poems';

class PoemService {
  http = axios.create({ baseURL: 'https://poetrydb.org/' });

  async getRandomPoem(quantity: number) {
    const res = await this.http.get<Poem>(`random/${quantity}`);
    return res.data;
  }
}

export default new PoemService();
