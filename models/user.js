const { models } = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  });
  
  // Create a User model based on the schema
  const User = mongoose.model('User', userSchema);
  module.exports(models);