const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userTestSchema = new Schema({
  userName: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
});

// const userTestSchema = new Schema({
//   name: {
//     type: String,
//     unique: true,
//   },
//   age: {
//     type: String,
//   },
//   car: {
//     type: Schema.Types.ObjectId,
//     ref: 'Car',
//   }
// });

module.exports = mongoose.model('UserTest', userTestSchema);
