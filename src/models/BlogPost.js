module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    underscored: true,
    tableName: 'blog_posts',
    timestamps: false,
    // createdAt: 'published',
    // updatedAt: 'updated',
  });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, {
      foreignKey: 'userId', as: 'user'
    });
  };

  return BlogPost;
};