import { Client, Databases, Query } from 'appwrite';
import env from '../config/config';

export class DBService {
    constructor() {
        this.client = new Client().setEndpoint(env.appUrl).setProject(env.projectId);
        this.database = new Databases(this.client);
    }

    async createPost(slug, { Title, Content, Image, IsActive, UserId }) {
        try {
            return await this.database.createDocument(env.databaseId, env.collectionId, slug, { Title, Content, Image, IsActive, UserId });
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

    async updatePost(slug, { Title, Content, Image, IsActive, UserId }) {
        try {
            return await this.database.updateDocument(env.databaseId, env.collectionId, slug, { Title, Content, Image, IsActive, UserId });
        } catch (error) {
            console.error('Error updating post:', error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(env.databaseId, env.collectionId, slug);
        } catch (error) {
            console.error('Error deleting post:', error);
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(env.databaseId, env.collectionId, slug);
        } catch (error) {
            console.error(`Error getting post with slug ${slug}:`, error);
            throw error;
        }
    }

    async getAllPosts() {
        try {
            const posts = await this.database.listDocuments(env.databaseId, env.collectionId, [Query.equal('IsActive', true)]);
            return posts;
        } catch (error) {
            console.error('Error getting all posts:', error);
            throw error;
        }
    }
}

const dbService = new DBService();

export default dbService;
