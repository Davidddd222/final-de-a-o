import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName
    : {
        type: String,
        required: [true, 'First name is required']
    },
    lastName
    : {
        type: String,
        required: [true, 'Last name is required']
    },
    email
    : {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }, 
    isAdmin: {
        type: Boolean,
        required: [true, 'Admin is required'],
        default: false
    }
},
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema)

export default User 