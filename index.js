const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize in-memory SQLite database
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT)");
    db.run("INSERT INTO users (username, password, role) VALUES ('admin', 'admin123', 'admin')");
    db.run("INSERT INTO users (username, password, role) VALUES ('user', 'user123', 'user')");
});

// CTF Challenge: Login Endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check for valid credentials without SQL injection
    if (username === 'admin' && password === 'admin123') {
        return res.json({ message: "Login successful", flag: "FLAG{logged_in_successfully👿}" });
    } else if (username === 'user' && password === 'user123') {
        return res.json({ message: "Login successful", flag: "FLAG{user_logged_in👿}" });
    } else {
        return res.status(401).json({ error: "Invalid credentials" });
    }
});

// CTF Challenge: Retrieve First Flag
app.get('/admin/get-flag', (req, res) => {
    const { role } = req.query;

    if (role === 'admin') {
        return res.json({ flag: "FLAG{first_flag_found🥷}" });
    } else {
        return res.status(403).json({ error: "Access denied" });
    }
});

// CTF Challenge: Access Admin Panel
app.get('/admin/panel', (req, res) => {
    const role = req.header('X-Role');

    if (role === 'admin') {
        return res.json({ message: "Welcome to the admin panel!", flag: "FLAG{admin_panel_accessed}" });
    } else {
        return res.status(403).json({ error: "Access denied" });
    }
});

// CTF Challenge: Retrieve Second Flag
app.get('/admin/second-flag', (req, res) => {
    const secretHeader = req.get('X-Secret-Header');

    if (secretHeader === 'SuperSecretValue') {
        return res.json({ flag: "FLAG{second_flag_revealed}" });
    } else {
        return res.status(403).json({ error: "Access denied" });
    }
});

// CTF Challenge: Retrieve Third Flag
app.get('/admin/third-flag', (req, res) => {
    return res.json({ flag: "FLAG{third_flag_unlocked}" });
});

// CTF Challenge: Retrieve Fourth Flag
app.get('/admin/fourth-flag', (req, res) => {
    return res.json({ flag: "FLAG{fourth_flag_acquired}" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
