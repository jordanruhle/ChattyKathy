const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const Message = sequelize.define('Message', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    senderId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    receiverId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  });

module.exports = Message;