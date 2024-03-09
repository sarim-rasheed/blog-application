import {Client, ID, Account} from 'appwrite'
import env from '../config/config'



export class AuthService {

 client = new Client();
 account ;
 constructor () {
    this.client.setEndpoint(env.appUrl).setProject(env.projectId);
    this.account = new Account(this.client);
 }


 async signUp({email, password, user}) {
    try {
     const users = await this.account.create(ID.unique(), email, password, user);
    return users;
    } catch (error) {
        throw error;
    }
   return null;
 }


 async login ({email, password}) {
    try {
        const user = await this.account.createEmailPasswordSession(email, password);
        return user ;
    } catch (error) {
    throw error;
    }

    return null;
 }

async logout () {
    try {
      return  await this.account.deleteSessions();
    } catch (error) {
        console.log(`AuthService :: Logout :: Error ${error}`);
    }
}

async getCurrentUser () {
    try {
      return await this.account.get();
    } catch (error) {
    throw error;        
    }
    return null;
}

}

const authService = new AuthService();


export default authService;