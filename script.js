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
    const user = await User.findById('619e6bfe6ba12e331c3a7db7');
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

run();
