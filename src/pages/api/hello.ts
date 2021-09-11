import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  fs.readFile("data.json", "utf-8", (err, datax) => {
    const xd = JSON.parse(datax);
    const ds = {
      ...xd,
      data: xd.data ? [...xd.data, req.query.data] : [req.query.data],
    };
    const a = JSON.stringify(ds);
    fs.writeFile("data.json", a, "utf-8", () => {});
    res.status(200).json(ds);
  });
}
