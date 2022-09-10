import { table } from "@/utils/airtable";

export default async function handler(req, res) {
  //get all communities from Airtable
  if (req.method === "GET") {
    try {
      const records = await table.select({}).firstPage();
      const minfiedRecords = minifyItems(records);
      res.status(200).json({ communities: minfiedRecords });
    } catch (error) {
      console.error(err);
      res.status(500).json({ msg: "Something went wrong getting records! 😕" });
    }
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
