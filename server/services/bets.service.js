const bets = require('../data/bets.json');

class betsService {
    async getAllBets () {
        return bets;
    }
}

module.exports = new betsService();