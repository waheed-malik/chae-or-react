import conf from "../conf.js";
import { Client,ID,Databases,Storage,Query } from 
"appwrite";
export class Services
{
    client =new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId); 
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
       }
//    create
       async createPost({title, slug,content,featuredImage,
        status,userId
       }){
        try {
            return await this.databases.createDocument(
              conf.appwriteDatabaseId,
              conf.appwriteCollectionId,
              slug,
              {
                title,
                content,
                featuredImage,
                status,
                userId,
            }

            )
        } catch (error) {
            console.log("Appwrite :: createPost :: error", error);
        }
       }
// update
       async updatePost(slug, {title,content,featuredImage,
        status}){
            try {
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status
                    }
                )
            } catch (error) {
                console.log("Appwrite :: createPost :: error", error);
            }
        }
// delete
        async deletePost(slug){
            try {
                await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                )
                return true
            } catch (error) {
                 console.log("Appwrite :: createPost :: error", error);
                 return false
            }

        }
// Single post get
        async getPost(slug){
            try {
                await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                )
            } catch (error) {
               console.log("Appwrite :: createPost :: error", error); 
               return false
            }
        }

//  all posts get
        async getPosts(queries= [Query.equal("status", "active")]){
          try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

                )
          } catch (error) {
        console.log("Appwrite :: createPost :: error", error); 
        return false
          }
        }

 // file upload service

        async uploadFile(file){
            try {
                return await this.bucket.createFile(
                    conf.apawriteBucketId,
                    ID.unique(),
                    file
                )
            } catch (error) {
            console.log("Appwrite :: createPost :: error", error); 
                return false
            }
        }

// delete services
        async deleteFile(fieldId){
            try {
                await this.bucket.deleteFile(
                    conf.appwriteBucketId,
                    fieldId
                )
                return true
            } catch (error) {
            console.log("Appwrite :: createPost :: error", error); 
                return false
            }
        }

        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        }
}
const service =new Services()
export
 default service
