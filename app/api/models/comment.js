import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
   {
      author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         require: true,
      },
      joke: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Joke",
         require: true,
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

const Comment = mongoose("Comment", CommentSchema);

module.exports = Comment;
