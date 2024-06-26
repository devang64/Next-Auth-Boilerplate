import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String
        },
        avatar: {
            type: String
        },
        provider: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);