const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Data file path
const DATA_FILE = path.join(__dirname, 'data', 'cms-data.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize default data if file doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    const defaultData = {
        blogPosts: [],
        caseStudies: [],
        services: [],
        testimonials: [],
        seoSettings: {
            siteTitle: "Outta The Box Marketing",
            siteDescription: "AI-Powered Digital Marketing Solutions for D2C Brands",
            siteKeywords: "digital marketing, AI marketing, D2C marketing, marketing automation",
            gaId: "",
            gscVerification: "",
            fbPixel: ""
        },
        settings: {
            websiteUrl: "https://pantmayank81.github.io/outta-the-box-marketing/",
            adminEmail: "pant.mayank@gmail.com",
            autosaveInterval: 5
        },
        lastModified: new Date().toISOString()
    };
    
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
}

// Helper functions
function readData() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data file:', error);
        return null;
    }
}

function writeData(data) {
    try {
        data.lastModified = new Date().toISOString();
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing data file:', error);
        return false;
    }
}

// API Routes

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Get all data
app.get('/api/data', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data);
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// Blog Posts
app.get('/api/blog-posts', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data.blogPosts || []);
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.get('/api/blog-posts/:id', (req, res) => {
    const data = readData();
    if (data) {
        const post = data.blogPosts.find(p => p.id === parseInt(req.params.id));
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Blog post not found' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.post('/api/blog-posts', (req, res) => {
    const data = readData();
    if (data) {
        const newPost = {
            id: Date.now(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        data.blogPosts.push(newPost);
        if (writeData(data)) {
            res.json(newPost);
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.put('/api/blog-posts/:id', (req, res) => {
    const data = readData();
    if (data) {
        const index = data.blogPosts.findIndex(p => p.id === parseInt(req.params.id));
        if (index !== -1) {
            data.blogPosts[index] = {
                ...data.blogPosts[index],
                ...req.body,
                updatedAt: new Date().toISOString()
            };
            if (writeData(data)) {
                res.json(data.blogPosts[index]);
            } else {
                res.status(500).json({ error: 'Failed to save data' });
            }
        } else {
            res.status(404).json({ error: 'Blog post not found' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.delete('/api/blog-posts/:id', (req, res) => {
    const data = readData();
    if (data) {
        data.blogPosts = data.blogPosts.filter(p => p.id !== parseInt(req.params.id));
        if (writeData(data)) {
            res.json({ success: true });
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// Case Studies
app.get('/api/case-studies', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data.caseStudies || []);
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.post('/api/case-studies', (req, res) => {
    const data = readData();
    if (data) {
        const newCaseStudy = {
            id: Date.now(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        data.caseStudies.push(newCaseStudy);
        if (writeData(data)) {
            res.json(newCaseStudy);
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.put('/api/case-studies/:id', (req, res) => {
    const data = readData();
    if (data) {
        const index = data.caseStudies.findIndex(c => c.id === parseInt(req.params.id));
        if (index !== -1) {
            data.caseStudies[index] = {
                ...data.caseStudies[index],
                ...req.body,
                updatedAt: new Date().toISOString()
            };
            if (writeData(data)) {
                res.json(data.caseStudies[index]);
            } else {
                res.status(500).json({ error: 'Failed to save data' });
            }
        } else {
            res.status(404).json({ error: 'Case study not found' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.delete('/api/case-studies/:id', (req, res) => {
    const data = readData();
    if (data) {
        data.caseStudies = data.caseStudies.filter(c => c.id !== parseInt(req.params.id));
        if (writeData(data)) {
            res.json({ success: true });
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// Services
app.get('/api/services', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data.services || []);
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.post('/api/services', (req, res) => {
    const data = readData();
    if (data) {
        const newService = {
            id: Date.now(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        data.services.push(newService);
        if (writeData(data)) {
            res.json(newService);
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.put('/api/services/:id', (req, res) => {
    const data = readData();
    if (data) {
        const index = data.services.findIndex(s => s.id === parseInt(req.params.id));
        if (index !== -1) {
            data.services[index] = {
                ...data.services[index],
                ...req.body,
                updatedAt: new Date().toISOString()
            };
            if (writeData(data)) {
                res.json(data.services[index]);
            } else {
                res.status(500).json({ error: 'Failed to save data' });
            }
        } else {
            res.status(404).json({ error: 'Service not found' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.delete('/api/services/:id', (req, res) => {
    const data = readData();
    if (data) {
        data.services = data.services.filter(s => s.id !== parseInt(req.params.id));
        if (writeData(data)) {
            res.json({ success: true });
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// Testimonials
app.get('/api/testimonials', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data.testimonials || []);
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.post('/api/testimonials', (req, res) => {
    const data = readData();
    if (data) {
        const newTestimonial = {
            id: Date.now(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        data.testimonials.push(newTestimonial);
        if (writeData(data)) {
            res.json(newTestimonial);
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.put('/api/testimonials/:id', (req, res) => {
    const data = readData();
    if (data) {
        const index = data.testimonials.findIndex(t => t.id === parseInt(req.params.id));
        if (index !== -1) {
            data.testimonials[index] = {
                ...data.testimonials[index],
                ...req.body,
                updatedAt: new Date().toISOString()
            };
            if (writeData(data)) {
                res.json(data.testimonials[index]);
            } else {
                res.status(500).json({ error: 'Failed to save data' });
            }
        } else {
            res.status(404).json({ error: 'Testimonial not found' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.delete('/api/testimonials/:id', (req, res) => {
    const data = readData();
    if (data) {
        data.testimonials = data.testimonials.filter(t => t.id !== parseInt(req.params.id));
        if (writeData(data)) {
            res.json({ success: true });
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// SEO Settings
app.get('/api/seo-settings', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data.seoSettings || {});
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.put('/api/seo-settings', (req, res) => {
    const data = readData();
    if (data) {
        data.seoSettings = {
            ...data.seoSettings,
            ...req.body,
            updatedAt: new Date().toISOString()
        };
        if (writeData(data)) {
            res.json(data.seoSettings);
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// Settings
app.get('/api/settings', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data.settings || {});
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.put('/api/settings', (req, res) => {
    const data = readData();
    if (data) {
        data.settings = {
            ...data.settings,
            ...req.body,
            updatedAt: new Date().toISOString()
        };
        if (writeData(data)) {
            res.json(data.settings);
        } else {
            res.status(500).json({ error: 'Failed to save data' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// Export/Import
app.get('/api/export', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data);
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.post('/api/import', (req, res) => {
    if (writeData(req.body)) {
        res.json({ success: true });
    } else {
        res.status(500).json({ error: 'Failed to import data' });
    }
});

app.post('/api/backup', (req, res) => {
    const data = readData();
    if (data) {
        const backupFile = path.join(__dirname, 'data', `backup-${Date.now()}.json`);
        fs.writeFileSync(backupFile, JSON.stringify(data, null, 2));
        res.json({ success: true, backupFile: backupFile });
    } else {
        res.status(500).json({ error: 'Failed to create backup' });
    }
});

// Stats
app.get('/api/stats', (req, res) => {
    const data = readData();
    if (data) {
        const stats = {
            blogPosts: data.blogPosts ? data.blogPosts.length : 0,
            caseStudies: data.caseStudies ? data.caseStudies.length : 0,
            services: data.services ? data.services.length : 0,
            testimonials: data.testimonials ? data.testimonials.length : 0,
            lastModified: data.lastModified
        };
        res.json(stats);
    } else {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`CMS API Server running on port ${PORT}`);
    console.log(`Admin panel: http://localhost:${PORT}/admin/`);
    console.log(`API endpoint: http://localhost:${PORT}/api/`);
});

module.exports = app;
