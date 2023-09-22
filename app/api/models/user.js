import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
   {
      id: {
         type: String,
         require: true,
         index: { unique: true },
      },
      username: {
         type: String,
         require: true,
         index: { unique: true },
      },
      password: {
         type: String,
         require: true,
      },
      role: {
         type: String,
         require: true,
      },
      avatar: {
         type: String,
      },
      deleted: {
         type: Boolean,
         default: false,
      },
      shielded: {
         type: Boolean,
         default: false,
      },
   },
   {
      timestamps: true,
   },
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
