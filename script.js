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
    // const user = new User({ name: 'Adam', age: 35 });
    const user = await User.create({
      name: 'Adam',
      age: 2021 - 1985,
      hobbies: ['Travelling', 'Sport'],
      address: {
        street: 'Main st.',
      },
      email: 'ADAM@x.filez',
    });
    user.name = 'Sadam';
    await user.save();

    user.age = 20;
    user.hobbies.push('kaszanka');
    user.email = 'sadam@world.pl';
    user.createdAt = 5;
    await user.save();

    console.log(await User.find({ name: 'Sadam' }));
    //console.log(await User.find({ name: 'Adam' }));
  } catch (err) {
    console.log(err.message);
  }
}

run();
