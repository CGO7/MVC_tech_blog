const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 5,
        comment_text: "Oh wow!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "What, the what?"
    },
    {
        user_id: 6,
        post_id: 4,
        comment_text: "What a world we live in "
    },
    {
        user_id: 7,
        post_id: 5,
        comment_text: "We just reached a million subscribers! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;