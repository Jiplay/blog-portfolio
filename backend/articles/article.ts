import { Article } from "../models/models"
import { database } from "../database/mongo";

export const articleManager = {
    createArticle(body: any) {
        const sampleArticle: Article = {
            Title: body.Title,
            FirstParagraph: body.FirstParagraph,
            LinkToImageToPromote: body.Link,
            Theme: body.Theme,
            Date: new Date(),
            Author: body.Author,
            PathOfFile: body.Path,
        };
        database.addArticles(sampleArticle);
    },
    async getArticles(author: string)  {
        const data = await database.getArticles(author)
        return data
    }
}