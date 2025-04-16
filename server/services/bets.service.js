const bets = require("../data/bets.json");
const ApiError = require("../exceptions/api.errors");

class betsService {
  async getAllBets() {
    return bets;
  }

  async updateBetStatusById(id, newStatus) {
    const findBet = bets.find((bet) => bet.betId === id);
    if (!findBet) {
      throw ApiError.NotFound(`Id ${id} Not Found!`);
    }

    findBet.status = newStatus;

    if (newStatus) {
      return findBet;
    }
  }
}

module.exports = new betsService();
