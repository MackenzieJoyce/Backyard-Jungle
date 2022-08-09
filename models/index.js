const Plants = require('./plants');
const Post = require('./post');
const Comment = require('./comment');
const User = require('./User');
const Category = require('./category');
const Collection = require('./collection');

//TO DO change associations for plants belong to Users through collection
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

Collection.belongsTo(User, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
})

Collection.hasMany(Plants, {
  foreignKey: 'collection_id',
  onDelete: 'CASCADE'
})

module.exports = {
  Plants,
  Post,
  Comment,
  User,
  Category,
  Collection
}
