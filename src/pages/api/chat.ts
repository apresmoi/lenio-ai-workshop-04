// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IMessage } from "@/types";
import { createIncidentTicket, createServiceTicket } from "@/utils/jira";
import {
  getChatReply,
  getFAQApplicableQuestions,
  getFollowingAction,
} from "@/utils/openai";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMessage[]>
) {
  const messages = req.body?.messages as IMessage[];

  if (!messages || !messages.length) return res.status(200).json([]);

  const followingAction = await getFollowingAction(messages);

  console.log({ followingAction });

  if (followingAction === "CREATE_INCIDENT") {
    res.status(200).json([
      ...messages,
      {
        role: "assistant",
        content:
          "An incident has been created, you will be hearing from us soon.",
      },
    ]);
  } else if (followingAction === "CREATE_SERVICE_TICKET") {
    res.status(200).json([
      ...messages,
      {
        role: "assistant",
        content: "A ticket has been created, you will be hearing from us soon.",
      },
    ]);
  } else if (followingAction === "REPLY") {
    const applicableQuestions = await getFAQApplicableQuestions(messages);

    console.log({ applicableQuestions });

    const faqContext = applicableQuestions
      ?.map(
        (q) => `${q.id}: ${q.question}
    
${q.answer}`
      )
      .join("\n\n");

    const reply = await getChatReply(faqContext || "", messages);

    console.log({ getChatReply: reply });

    return res.status(200).json([
      ...messages,
      {
        role: "assistant",
        content: reply || "",
      },
    ]);
  } else {
    return res.status(200).json(messages);
  }

  return res.status(200).json(messages);
}
