import $api from '../api/axios';
import { IBetsInfo } from '../types/bets';

export default class BetsService {
    static async getAllBets(): Promise<IBetsInfo> {
        const response = await $api.get("/bets");
        return response.data;
    }
}