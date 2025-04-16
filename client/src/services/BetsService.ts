import $api from "../api/axios";
import { IAllBetsInfo } from "../types/bets";

export default class BetsService {
  static async getAllBets(): Promise<IAllBetsInfo[]> {
    const response = await $api.get("/bets");
    return response.data;
  }

  static async updateStatusById(
    id: number,
    status: string
  ): Promise<IAllBetsInfo> {
    const response = await $api.patch(`/bets/${id}`, { status });
    return response.data;
  }
}
