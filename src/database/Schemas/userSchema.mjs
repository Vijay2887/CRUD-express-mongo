import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  displayName: {
    type: Schema.Types.String,
    required: true,
  },
});

export const User = mongoose.model("user", userSchema);
