const mongoose = require('mongoose');
const User = require('./User.js');

console.log('--------------------------------------------');

mongoose.connect(
  'mongodb://localhost/testUserdb',
  () => {
    console.log('connected');
  },
  (e) => {
    console.error(e);
  }
);

async function run() {
  try {
    const user = await User.where('age').gt(5);
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

run();
