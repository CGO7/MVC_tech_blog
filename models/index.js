const User = require('./users');
const Post = require('./posts');
const Comment = require('./comments');

//create relationships
User.hasMany(Post, {
    foreignKey: 'users_id'
});

Post.belongsTo(User, {
    foreignKey: 'users_id',
});

Comment.belongsTo(User, {
    foreignKey: 'users_id'
  });
  
Comment.belongsTo(Post, {
    foreignKey: 'posts_id'
});
  
User.hasMany(Comment, {
    foreignKey: 'users_id'
});
  
Post.hasMany(Comment, {
    foreignKey: 'posts_id'
});

module.exports = {User, Post, Comment};