const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./comments');

//create relationships
Users.hasMany(Posts, {
    foreignKey: 'users_id'
});

Posts.belongsTo(Users, {
    foreignKey: 'users_id',
});

Comments.belongsTo(Users, {
    foreignKey: 'users_id'
  });
  
Comments.belongsTo(Post, {
    foreignKey: 'posts_id'
});
  
Users.hasMany(Comments, {
    foreignKey: 'users_id'
});
  
Posts.hasMany(Comments, {
    foreignKey: 'posts_id'
});

module.exports = {Users, Posts, Comments};