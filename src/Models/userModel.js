import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "User password is required"],
    },
    isVerified: Boolean,
    isAdmin: Boolean,
  },
  {
    collection: "allusers",
  }
);

const User = mongoose.models.allusers || mongoose.model("allusers", userSchema);

export default User;
