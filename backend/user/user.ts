import { User } from "../models/models"
import { database } from "../database/mongo";

export const userManager = {
    async addUser(username: string, email: string) {
        const user:User = {
            Username: username,
            Email: email,
            Password: "ChangeMe123*"
        }
        await database.addUser(user);
    },
    // async login(body: any): Promise<string> {
    //     try {
    //         database.
    //     } catch (error) {
            
    //     }
    //     return "true"
    // },

}