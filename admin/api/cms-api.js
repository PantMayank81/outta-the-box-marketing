// CMS API - Simple API for CMS operations
class CMSAPI {
    constructor() {
        this.baseUrl = window.location.origin;
        this.apiEndpoint = '/admin/api/';
    }

    // GET request
    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}${this.apiEndpoint}${endpoint}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('GET request failed:', error);
            return null;
        }
    }

    // POST request
    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseUrl}${this.apiEndpoint}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('POST request failed:', error);
            return null;
        }
    }

    // PUT request
    async put(endpoint, data) {
        try {
            const response = await fetch(`${this.baseUrl}${this.apiEndpoint}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('PUT request failed:', error);
            return null;
        }
    }

    // DELETE request
    async delete(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}${this.apiEndpoint}${endpoint}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('DELETE request failed:', error);
            return null;
        }
    }

    // CMS specific methods
    async getBlogPosts() {
        return await this.get('blog-posts');
    }

    async getBlogPost(id) {
        return await this.get(`blog-posts/${id}`);
    }

    async createBlogPost(data) {
        return await this.post('blog-posts', data);
    }

    async updateBlogPost(id, data) {
        return await this.put(`blog-posts/${id}`, data);
    }

    async deleteBlogPost(id) {
        return await this.delete(`blog-posts/${id}`);
    }

    async getCaseStudies() {
        return await this.get('case-studies');
    }

    async getCaseStudy(id) {
        return await this.get(`case-studies/${id}`);
    }

    async createCaseStudy(data) {
        return await this.post('case-studies', data);
    }

    async updateCaseStudy(id, data) {
        return await this.put(`case-studies/${id}`, data);
    }

    async deleteCaseStudy(id) {
        return await this.delete(`case-studies/${id}`);
    }

    async getServices() {
        return await this.get('services');
    }

    async getService(id) {
        return await this.get(`services/${id}`);
    }

    async createService(data) {
        return await this.post('services', data);
    }

    async updateService(id, data) {
        return await this.put(`services/${id}`, data);
    }

    async deleteService(id) {
        return await this.delete(`services/${id}`);
    }

    async getTestimonials() {
        return await this.get('testimonials');
    }

    async getTestimonial(id) {
        return await this.get(`testimonials/${id}`);
    }

    async createTestimonial(data) {
        return await this.post('testimonials', data);
    }

    async updateTestimonial(id, data) {
        return await this.put(`testimonials/${id}`, data);
    }

    async deleteTestimonial(id) {
        return await this.delete(`testimonials/${id}`);
    }

    async getSEOSettings() {
        return await this.get('seo-settings');
    }

    async updateSEOSettings(data) {
        return await this.put('seo-settings', data);
    }

    async getSettings() {
        return await this.get('settings');
    }

    async updateSettings(data) {
        return await this.put('settings', data);
    }

    async exportData() {
        return await this.get('export');
    }

    async importData(data) {
        return await this.post('import', data);
    }

    async backupData() {
        return await this.post('backup');
    }

    // Utility methods
    async healthCheck() {
        return await this.get('health');
    }

    async getStats() {
        return await this.get('stats');
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CMSAPI;
} else {
    window.CMSAPI = CMSAPI;
}
