import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,//One who is subscribing(follower)
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,//One who is being subscribed(channel owner)
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
