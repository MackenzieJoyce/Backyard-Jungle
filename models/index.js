const Plants = require('./plants');
const Post = require('./post');
const Comment = require('./comment');
const User = require('./User');
const Category = require('./category');
const Collection = require('./collection');

// TO DO change associations for plants belong to Users
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

Plants.hasMany(Collection, {
  foreignKey: 'plant_id',
  onDelete: 'CASCADE'
})
Collection.belongsTo(Plants)

module.exports = {
  Plants,
  Post,
  Comment,
  User,
  Category,
  Collection
}
