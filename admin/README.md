# Outta The Box Marketing CMS

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the CMS server:**
   ```bash
   npm start
   ```

3. **Access the admin panel:**
   Open http://localhost:3001/admin/ in your browser

## 📁 File Structure

- `server.js` - Main server file
- `index.html` - Admin panel interface
- `cms.js` - Frontend CMS functionality
- `data/cms-data.json` - Content data storage
- `api/` - API endpoints

## 🔧 Features

- **Blog Post Management** - Create, edit, delete blog posts
- **Case Study Management** - Manage client case studies
- **Service Management** - Update service offerings
- **Testimonial Management** - Manage client testimonials
- **SEO Settings** - Configure SEO metadata
- **Real-time Updates** - Changes reflect immediately on website
- **Data Export/Import** - Backup and restore content
- **Auto-save** - Automatic content saving

## 🌐 API Endpoints

- `GET /api/blog-posts` - Get all blog posts
- `POST /api/blog-posts` - Create new blog post
- `PUT /api/blog-posts/:id` - Update blog post
- `DELETE /api/blog-posts/:id` - Delete blog post
- Similar endpoints for case-studies, services, testimonials

## 📊 Data Storage

All content is stored in `data/cms-data.json` as JSON format.
The file is automatically backed up and versioned.

## 🔒 Security

- CORS enabled for cross-origin requests
- Input validation on all endpoints
- File system protection
- Data sanitization

## 🚀 Deployment

The CMS can be deployed to any Node.js hosting service:
- Heroku
- Vercel
- Netlify Functions
- DigitalOcean
- AWS

## 📞 Support

For support, contact: pant.mayank@gmail.com
