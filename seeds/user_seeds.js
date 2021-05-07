const { User } = require('../models');

const userData = [
    {
        username: "Happy Gilmore",
        twitter: "longdriveguy",
        github: "holein1",
        email: "happy@gmail.com",
        password: "foreHappy"
    },
    {
        username: "Billy_madison",
        twitter: "mrpenguin",
        github: "camaroguy",
        email: "billyb@gmail.com",
        password: "chocolateMilk"
    },
    {
        username: "Batman",
        twitter: "batman",
        github: "batman",
        email: "batman@batman.org",
        password: "batman"
    },
    {
        username: "Spiderman",
        twitter: "Spidey",
        github: "spiderGuy",
        email: "spidey@msn.com",
        password: "password"
    },
    {
        username: "hulkHogan",
        twitter: "hulkster",
        github: "hulamania",
        email: "email?@email.com",
        password: "HULK123"
    },
    {
        username: "Marshall",
        twitter: "fireDog",
        github: "Dalmations",
        email: "redHat",
        password: "pawpatrol"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;