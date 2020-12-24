const Shop = require("../models/Shop.model");

module.exports.create = shop => Shop.create(shop);
module.exports.getAll = () => Shop.find({});
module.exports.getById = id => Shop.findById(id);
module.exports.updateById = (id, shop) => Shop.findByIdAndUpdate(id, shop);
module.exports.deleteById = id => Shop.findByIdAndDelete(id);