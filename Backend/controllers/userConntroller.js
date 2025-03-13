const User = require("../models/user");

const getUserProfile = async (req, res) => {
    try {
        const userProfiles = await User.findById(req.params.id).select('-password')
        if (!userProfiles) {
            return res.status(404).json({ message: "User not found" })
        }
        return res.status(200).json({ message: "User fethced suceesfully", userProfiles });
    } catch (error) {
        res.status(500).json({ message: "server error", error })
    }
}

const updateUserProfile = async (req, res) => {
    try {
        const updateUser = await User.findById(req.params.id)
        if (!updateUser) {
            return res.status(404).json({ message: "User not found" })
        }
        updateUser.name = req.body.name || updateUser.name;

        await updateUser.save();
        return res.status(200).json({ message: "profile updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getUserProfile, updateUserProfile };