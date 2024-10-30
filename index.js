const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to my web service!');
});

// Example route with route parameters
app.get('/courses/:department/:level', (req, res) => {
    const { department, level } = req.params;
    if (!department || !level) {
        return res.status(400).json({ error: 'Missing department or level' });
    }
    res.json({ department, level, message: `Courses in ${department} for level ${level}` });
});

// Example route with query parameters
app.get('/clothing', (req, res) => {
    const { category, color } = req.query;
    if (!category || !color) {
        return res.status(400).json({ error: 'Missing category or color' });
    }
    res.json({ category, color, message: `Available ${category} in ${color}` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
