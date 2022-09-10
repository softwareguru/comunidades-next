import { table, minifyItems } from "@/utils/airtable";

export default async function handler(req, res) {
  //get all communities from Airtable
  if (req.method === "GET") {
    try {
      const records = await table.select({}).firstPage();
      const minfiedRecords = minifyItems(records);
      //return only the ones that are approved
      console.log("minfiedRecords =>", minfiedRecords);
      const approvedCommunities = minfiedRecords.filter(
        (item) => item.fields["Verificación"] === true
      );

      res.status(200).json({ communities: approvedCommunities });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Something went wrong getting records! 😕" });
    }
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
