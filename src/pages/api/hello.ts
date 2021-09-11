import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = {
    name: "CHAMA",
  };

  const json = JSON.stringify(data);

  fs.writeFile("data.json", json, "utf-8", () => {});

  fs.readFile("data.json", "utf-8", (err, data) => {
    const xd = JSON.parse(data);
    res.status(200).json(xd);
  });
}
