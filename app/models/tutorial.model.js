module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("account", {
    name: {
      type: Sequelize.STRING
    },
    purpose: {
      type: Sequelize.STRING
    },
    GivenAmount: {
      type: Sequelize.STRING
    },
    ExpenseAmount: {
      type: Sequelize.STRING
    },
    OwnSpends: {
      type: Sequelize.STRING
    },
    Balance: {
      type: Sequelize.STRING
    },
    // published: {
    //   type: Sequelize.BOOLEAN
    // }
  });

  return Account;
};
