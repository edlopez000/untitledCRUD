import axios from 'axios';
import Poem from '../models/poems';

const randomLines = () => {
  return Math.random() * (30 - 5) + 5;
};

class PoemService {
  http = axios.create({ baseURL: 'https://poetrydb.org/' });
  async getRandomPoem() {
    const res = await this.http.get<Poem>(`linecount/${randomLines()}`);
    return res.data;
  }
}

export default new PoemService();
