import { Article } from "../models/models"
import { database } from "../database/mongo";
import { appendFile } from "fs";

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
    async getArticles(author: string): Promise<Article[]> {
        const data = await database.getArticles(author)
        let articles:Article[] = [] 
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element.article.Title)
            const tmp: Article = {
                Title: element.article.Title,
                FirstParagraph: element.article.FirstParagraph,
                LinkToImageToPromote: element.article.LinkToImageToPromote,
                Theme: element.article.Theme,
                Date: element.article.Date,
                Author: element.article.Author,
                PathOfFile: element.article.PathOfFile,
            }
            articles.push(tmp)
        }
        return articles
    }
}