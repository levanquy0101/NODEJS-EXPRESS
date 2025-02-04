const authService = require("../services/authService");

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { token, user } = await authService.login(username, password);
        res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const logoutUser = (req, res) => {
    try {
        // Xóa cookie token khi logout
        res.clearCookie("token");

        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "Error logging out", error: error.message });
    }
};

module.exports = { loginUser, logoutUser };
