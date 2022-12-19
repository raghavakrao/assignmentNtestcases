module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    description: {
      type : Sequelize.STRING
    },
    viewCount: {
      type: Sequelize.INTEGER
    }
  });

  return Product;
};
