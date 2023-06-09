// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createIncidentTicket, createServiceTicket } from "@/utils/jira";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { type, summary, description } = req.body;
  console.log(type, summary, description);

  if (!type || !summary || !description)
    return res.status(400).json({ error: "Missing parameters" });

  if (type === "CHANGE_PASSWORD")
    createServiceTicket(summary, description, "CHANGE_PASSWORD")
      .then(() => res.status(200).json({ success: true }))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  else if (type === "SYSTEM_CRASH")
    createIncidentTicket(summary, description, "CRITICAL")
      .then(() => res.status(200).json({ success: true }))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  else {
    return res.status(400).json({ error: "Invalid type" });
  }
}
