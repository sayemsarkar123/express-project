const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
  try {
    const shop = await shopService.create(req.body);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ message: "Oops, Something Went Wrong" });
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    const shops = await shopService.getAll();
    res.status(200).json(shops);
  } catch (error) {
    res.status(500).json({ message: "Oops, Something Went Wrong" });
  }
}

module.exports.getById = async (req, res, next) => {
  try {
    const shop = await shopService.getById(req.params.id);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ message: "Oops, Something Went Wrong" });
  }
}

module.exports.updateById = async (req, res, next) => {
  try {
    const shop = await shopService.updateById(req.params.id, req.body);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ message: "Oops, Something Went Wrong" });
  }
}

module.exports.deleteById = async (req, res, next) => {
  try {
    const shop = await shopService.deleteById(req.params.id);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ message: "Oops, Something Went Wrong" });
  }
}