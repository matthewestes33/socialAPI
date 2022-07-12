const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// see timeAndDateFormat.js
const timeAndDateFormat = require('../utils/timeAndDateFormat');

//schema to create thought model w/ virtual properties
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      //message to accompany required property
      required: 'Please leave a thought.',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => timeAndDateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      // virtuals because there is a virtual property in this schema
      virtuals: true
    },
    id: false
  }
);

// virtual property reactionCount that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// initialize user model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
