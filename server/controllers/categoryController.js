
const Category = require("../models/Category");

class categoryController {
  
  async create(req, res) {
    try {
      const category = new Category({
        createdBy: req.body.userId,
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
      });
      await category.save();
      res.send(category);
    } catch (e) {
      return res.send({ err: e });
    }
  }
  async update(req, res) {
    await Category.findOneAndUpdate(
      { _id: req.body.id },
      {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
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
        Category.find({id: req.body.id}, (err, found) => {
        res.json(found);
      });
    } catch (e) {
      return res.send({ err: e });
    }
  }
  async delete(req, res) {
    try {
      await Category.deleteOne({ _id: req.body.id });
      res.send("deleted " + req.body.id);
    } catch (e) {
      return res.send({ err: e });
    }
  }
}

module.exports = new categoryController();
