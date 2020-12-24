const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/shop';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
};

mongoose.connect(uri, options, function (error) {
  if (error) {
    console.log('Connection Error');
  } else {
    console.log('Connection with database succeeded.');
  }
});

module.exports = mongoose;