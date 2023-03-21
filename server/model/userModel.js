import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide name"],
        unique: [true, "Email Exist"],
    },
    email: {
        type: String,
        required: [true, "please provide Email"],
    },
    password: {
        type: String,
        required: [true, "please provide Password"],
    },
});

const UserDB = mongoose.model("user", UserSchema);
export default UserDB;
