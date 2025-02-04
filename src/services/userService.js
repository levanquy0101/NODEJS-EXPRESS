const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const register = async (username, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    return await newUser.save();
};

const getAll = async () => {
    return await User.find();
};

const getById = async (id) => {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");
    return user;
};

const update = async (id, updateData) => {
    const user = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!user) throw new Error("User not found");
    return user;
};

const remove = async (id) => {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new Error("User not found");
    return user;
};

module.exports = { register, getAll, getById, update, remove,};
