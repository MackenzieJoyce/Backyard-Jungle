const Plants = require('./Plants');
const Post = require('./post')
const User = require('./User')
const Comment = require('./comment')

// const Post = require('./Post');
// const Comment = require('./comment');

// Post.belongsTo(User, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// });

// Post.hasMany(Comment, {
//     foreignKey: 'postId',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// });

module.exports = {
    Plants,
    Post,
    User,
    Comment
};
