const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

const login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
        throw new Error("Invalid credentials");
    }

    // Tạo token JWT
    const token = jwt.sign({ userId: user._id }, config.secretKey, { expiresIn: "1h" });
    user.password = undefined;
     // Gửi token qua HTTP-only cookie
     res.cookie("token", token, {
        httpOnly: true, // Không cho phép JavaScript truy cập cookie
        secure: process.env.NODE_ENV === "production", // Đảm bảo cookie chỉ gửi qua HTTPS nếu trong môi trường production
        sameSite: "Strict", // Chỉ gửi cookie khi cùng một domain
        expires: new Date(Date.now() + 3600000), // Token hết hạn sau 1 giờ
    });
    return { token, user };
};

module.exports = { login };
