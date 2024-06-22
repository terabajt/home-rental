import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true, // Ensure uniqueness of email addresses
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property", // Assuming 'Property' is the name of another Mongoose model
      },
    ],
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
);

// Use models.User if it exists, otherwise define the User model
const User = models.User || model("User", UserSchema);

export default User;
