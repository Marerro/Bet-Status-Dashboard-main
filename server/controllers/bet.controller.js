const betsService = require('../services/bets.service');

class betsController {
    async getAllBets (req, res, next) {
        try {
          const allBets = await betsService.getAllBets()
          res.status(200).json(allBets);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new betsController()