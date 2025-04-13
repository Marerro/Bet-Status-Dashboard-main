const bets = require("../data/bets.json");
const ApiError = require("../middlewares/api.errors");

class betsService {
  async getAllBets() {
    return bets;
  }

  async updateBetsById(id) {
    const findBet = bets.find((bet) => bet.betId === id);
    if (!findBet) {
      throw ApiError.NotFound(`Id ${id} Not Found!`);
    }
    return findBet;
  }
}

module.exports = new betsService();
