const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/views/projects.html');
});

// API endpoint for projects data
app.get('/api/projects', (req, res) => {
    const projects = [
        { id: 1, name: 'Azure DevOps Pipeline', description: 'Complete CI/CD pipeline with UAT, Pre-Prod, Production', tech: 'Azure, GitHub Actions, Node.js' },
        { id: 2, name: 'E-Commerce Platform', description: 'Full-stack e-commerce solution', tech: 'React, Node.js, MongoDB' },
        { id: 3, name: 'Portfolio Website', description: 'Multi-environment deployment demo', tech: 'Express, Azure App Service' }
    ];
    res.json(projects);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', environment: process.env.NODE_ENV });
});

app.listen(port, () => {
    console.log(`Portfolio app running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
});
