const Transaction = require("../models/Transaction");
const moment = require("moment");

class transactionController {
  async create(req, res) {
    let now = moment().format("DD/MM/YYYY HH:mm");
    try {
      const transaction = new Transaction({
        userId: req.body.userId,
        money_operations: req.body.money_operations,
        description: req.body.description,
        type: req.body.type,
        created: now,
      });
      await transaction.save();
      res.send(transaction);
    } catch (e) {
      return res.send({ err: e });
    }
  }
  async update(req, res) {
    await Transaction.findOneAndUpdate(
      { _id: req.body.id },
      {
        userId: req.body.userId,
        money_operations: req.body.money_operations,
        description: req.body.description,
        type: req.body.type,
        created: req.body.created,
      },
      {
        upsert: true,
      }
    )
      .then(() => {
        res.status(201).json({
          message: "Updated successfully!",
        });
      })
      .catch((e) => {
        return res.send({ err: e });
      });
  }
  async get(req, res) {
    try {
      Transaction.find({ userId: req.body.userId }, (err, found) => {
        res.json(found);
      });
    } catch (e) {
      return res.send({ err: e });
    }
  }
  async delete(req, res) {
    try {
      await Transaction.deleteOne({ _id: req.body.id });
      res.send("deleted " + req.body.id);
    } catch (e) {
      return res.send({ err: e });
    }
  }
  async search(req, res) {
    if (req.body && req.body?.userId) {
      try {
        Transaction.find(
          { userId: req.body.userId  },
          (err, found) => {
            return found
              ? res.send({ transactions: found })
              : res.send({ data: err });
          }
        );
      } catch (e) {
        return res.send({ data: e });
      }
    } else {
      try {
        Transaction.find({}, (err, found) => {
          found ? res.send({ transactions: found }) : res.send({ data: err });
        });
      } catch (e) {
        return res.send({ data: e });
      }
    }
  }
}

module.exports = new transactionController();
