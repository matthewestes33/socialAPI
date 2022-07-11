const { Schema, model } = require('mongoose');

//schema to create user model w/ virtual properties
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // regular expression to validate email in Mongoose
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Must match an email address!'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        // array is self-referencing 
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
    // virtuals because there is a virtual property in this schema
      virtuals: true,
    },
    id: false,
  }
);

// virtual property friendCount that gets the amount of friends per user
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// initialize user model
const User = model('User', userSchema);

module.exports = User;