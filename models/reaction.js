const { Schema, Types } = require('mongoose');
// see timeAndDateFormat.js
const timeAndDateFormat = require('../utils/timeAndDateFormat');

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
      get: timestamp => timeAndDateFormat(timestamp)
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