import { MongoClient } from "mongodb";
import { Article, User } from "../models/models"
import * as dotenv from 'dotenv';

dotenv.config();

export const database = {
    // async getUser(username: string, password: string) {
    //     const uri = process.env.MONGO
    //     const client = new MongoClient(uri!);
    //     let pipeline
    //     try {
    //         pipeline = [
    //             { $match: { 'article.Author': author } },
    //             { $sort: { date: -1 } }
    //         ];
    //         await client.connect();
    //         const database = client.db('Articles');
    //         const collection = database.collection("articles");
    //         const articles = await collection.aggregate(pipeline).toArray();

    //         return articles;
    //     } catch (error) {
    //         console.error('Une erreur s\'est produite lors de la récupération des utilisateur :', error);
    //         throw error;
    //     }
    // },

    async addUser(user: User) {
        const uri = process.env.MONGO
        const client = new MongoClient(uri!);
        try {
            await client.connect();
            const database = client.db('Articles');
            const collection = database.collection("users");
            const _ = await collection.insertOne({ article: user });
        } finally {
            client.close();
        }
    },

    async addArticles(article: Article) {
        const uri = process.env.MONGO
        const client = new MongoClient(uri!);
        try {
            await client.connect();
            const database = client.db('Articles');
            const collection = database.collection("articles");
            const _ = await collection.insertOne({ article: article, date: new Date() });
        } finally {
            client.close();
        }
    },

    async getArticles(author?: string) {
        const uri = process.env.MONGO
        const client = new MongoClient(uri!);
        let pipeline
        try {
            if (author !== undefined) {
                pipeline = [
                    { $match: { 'article.Author': author } },
                    { $sort: { date: -1 } }
                ];
            }
            await client.connect();
            const database = client.db('Articles');
            const collection = database.collection("articles");
            const articles = await collection.aggregate(pipeline).toArray();

            return articles;
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des utilisateur :', error);
            throw error;
        }
    },
}