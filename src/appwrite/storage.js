import { Client, Storage, ID } from 'appwrite';
import env from '../config/config';

export class StorageService {
client = new Client();
storage ;
constructor () {
    this.client.setEndpoint(env.appUrl).setProject(env.projectId)
    this.storage = new Storage(this.client);
}

async uploadFile(file) {
try {
    return await this.storage.createFile(env.bucketId,ID.unique(),file)
} catch (error) {
    console.error('Error uploading file:', error);
    throw error;
}

}

async deleteFile(fileId) {
    try {
        await this.storage.deleteFile(env.bucketId,fileId)
        return true;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
    return false;
}


async getFilePreview (fileId) {
  try {
    return this.storage.getFilePreview(env.bucketId,fileId)
  } catch (error) {
    console.error('Error getting post preview:', error);
    throw error;
  }
}

}

const storageService = new StorageService();


export default storageService;