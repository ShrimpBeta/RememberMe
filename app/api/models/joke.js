import mongoose from "mongoose";

const JokeSchema = new mongoose.Schema(
   {
      author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         require: true,
      },
      cover: {
         type: String,
         default: "",
      },
      content: {
         type: String,
         require: true,
      },
      StarCount: {
         type: Number,
         default: 0,
      },
      StaredBy: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
         },
      ],
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

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
