const { Post } = require('../models');

const postData = [
    {
        title: "Happy Gilmore wins First Major",
        post_content: "In an amazing comeback, Happy Gilmore wins his first major.  Putting up multiple 400 yard drives, to win the day, while his putts were not up to par",
        user_id: 2
    },
    {
        title: "Billy Madison to redo grades 1-12",
        post_content: "The owner of the mega chain of hotels, Madison Hotels, has decided to give his son a chance to run his company by completing grades 1-12 in 2 week increments.",
        user_id: 1
    },
    {
        title: "Bruce Wayne to hold Gala",
        post_content: "Bruce Wayne will be hosting a Gala this Saturday to raise awareness for Batcaves.",
        user_id: 3

    },
    {
        title: "How to become a Super Hero",
        post_content: "Get bit by a spider!",
        user_id: 6
    },
    {
        title: "Hulks Return",
        post_content: "Hulk Hogan has made his return to bigscreen in his new starring role in the color yellow",
        user_id: 7
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;