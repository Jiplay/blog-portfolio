import { NextApiRequest, NextApiResponse } from "next";
import { articleManager } from "@/backend/articles/article";

type ResponseData = {
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

    const articles = await articleManager.getArticles(author!);
    console.log(articles) // FIXME convert weird type into Articles
    res.status(200).json({ status: "OK" });
  } 
}
