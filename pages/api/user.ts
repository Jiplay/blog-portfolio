import { NextApiRequest, NextApiResponse } from "next";
import { userManager } from "@/backend/user/user";

type ResponseData = {
  status?: string;
};

type QueryParameters = {
  author?: string;
};


export default async function endpoint(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === "POST") {
    const body = req.body;

    userManager.addUser(body.username,body.email);

    res.status(200).json({ status: "OK" });
  } else {

    res.status(404).json({  });
  } 
}
