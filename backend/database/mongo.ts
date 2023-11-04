import { MongoClient } from "mongodb";
import { Article } from "../models/models"
import * as dotenv from 'dotenv';

dotenv.config();

export const database = {
    async addArticles(article: Article) {
        const uri = process.env.MONGO
        const client = new MongoClient(uri!);
        try {
            await client.connect();
            const database = client.db('Articles');
            const collection = database.collection(article.Author);
            const _ = await collection.insertOne({ article: article, date: new Date() });
        } finally {
            client.close();
        }
    },

    async getArticles(author: string) {
        const uri = process.env.MONGO
        const client = new MongoClient(uri!);
        try {
            const pipeline = [
                { $sort: { date: -1 } }
            ];
            await client.connect();
            const database = client.db('Articles');
            const collection = database.collection(author);
            
            const articles = await collection.aggregate(pipeline).toArray();

            return articles;
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des articles :', error);
            throw error;
        }
    },
}