const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//schema to create reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
    // getters because there is no virtual property in this schema
      getters: true
    },
    id: false
  }
);

module.exports = reactionSchema;