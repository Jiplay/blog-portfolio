import { NextApiRequest, NextApiResponse } from "next";
import { articleManager } from "@/backend/articles/article";
import { Article } from "@/backend/models/models";

type ResponseData = {
  articles?: Article[];
  status?: string;
};

type QueryParameters = {
  author?: string;
};


export default async function endpoint(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === "POST") {
    const body = req.body;

    articleManager.createArticle(body);

    res.status(200).json({ status: "OK" });
  } else if (req.method === "GET") {
    const { author }: QueryParameters = req.query;
    let articles
    if (author === undefined) {
      articles = await articleManager.getArticles();
    } else {
      articles = await articleManager.getArticles(author)
    }

    res.status(200).json({ articles: articles });
  } 
}
