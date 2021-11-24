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

async function run () {
  const user = new User({ name: 'Adam', age: 35 });
  await user.save();
  console.log(await User.find({ name: 'Adam' }));
}

run();
