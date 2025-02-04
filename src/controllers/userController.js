const userService = require("../services/userService");

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await userService.register(username, email, password);
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ message: "Error getting users", error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const user = await userService.getById(req.params.id);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const updatedUser = await userService.update(req.params.id, req.body);
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await userService.delete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { register, getAll, getById, update, remove };
