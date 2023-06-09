import { IMessage } from "@/types";
import axios from "axios";
import { faq } from "./faq";

export function chatCompletion(messages: IMessage[]): Promise<string | null> {
  console.log(messages);

  return axios
    .post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [...messages],
        max_tokens: 500,
        temperature: 0.9,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    )
    .then((response) => {
      if (response.data.choices?.[0]?.message?.content)
        return response.data.choices?.[0]?.message?.content as string;
      return null;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}

export function getFollowingAction(messages: IMessage[]) {
  return chatCompletion([
    //fill here
  ]);
}

export async function getFAQApplicableQuestions(messages: IMessage[]) {
  const reply = await chatCompletion([
    //fill here
  ]);

  if (!reply) return null;

  const questionsIndex = JSON.parse(reply) as number[];

  return faq.filter((q) => questionsIndex.includes(parseInt(q.id, 10)));
}

export async function getChatReply(context: string, messages: IMessage[]) {
  return chatCompletion([
    //fill here
  ]);
}
