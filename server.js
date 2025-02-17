const express = require('express');
const app = express();
const PORT = 3000;

app.get("/signup", (req, res) => {
    const { password, email } = req.query;


    if (!password || password.length < 8) {
        return res.send("Password should be at least 8 characters");
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.send("Invalid email.");
    }
    


    res.send("Signup successful!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});