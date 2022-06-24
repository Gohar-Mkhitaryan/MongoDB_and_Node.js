'use strict'
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        surname:{
            type: String,
            required: true
        },
        age:{
            type: Number
        },
        isPublic:{
            type: Boolean,
            default: false, 
        },
        created:{
            type: Date,
            default: Date.now,
        }
    }
);
const User = mongoose.model('User', userSchema);

export default User;
