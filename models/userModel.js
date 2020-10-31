import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
        dropDups: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    isAdmin: {
        type: 'boolean',
        required: true,
        default: false,
    },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
