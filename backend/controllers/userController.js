const { User } = require('../models');

const getUserByEmail = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
}

const getEmailSuggestions = async (req, res) => {
    const query = req.params.q?.toLowerCase() || "";
    if(!query) return res.json([]);
    try {
        const suggestions = await User.find({
            email: {$regex: query, $options: "i"},
        }).limit(5);
        res.json(suggestions.map((user) => user.email));
    } catch(error) {
        console.error("Error fetching email suggestions:", error);
        res.status(500).send("Server error");
    }
}

module.exports = { getUserByEmail, getEmailSuggestions };