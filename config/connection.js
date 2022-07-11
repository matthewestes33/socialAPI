const mongoose = require('mongoose');

//wraps Mongoose around local connection to MongoDB (always 27017)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
