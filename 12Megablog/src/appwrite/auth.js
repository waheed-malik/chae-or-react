import conf from "../conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error("Appwrite createAccount error:", error);
            throw error;
        }

    }
    async login({ email, password }) {
        try {
          const session = await this.account.createEmailPasswordSession(email, password);
          console.log("Login successful:", session);
          return session;
        } catch (error) {
          console.error("Appwrite login error:", error.message);
          throw error;
        }
      }

      async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite servic :: getCurrentUser :: error", error)
        }

        return null;
      }
       async logout(){
        try {
           return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite servic :: getCurrentUser :: error", error)
        }
       
       }

}

const authService = new AuthService();

export default authService;
