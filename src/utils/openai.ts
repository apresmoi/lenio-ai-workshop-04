import { IMessage } from "@/types";
import axios from "axios";
import { faq } from "./faq";

export function chatCompletion(messages: IMessage[]): Promise<string | null> {
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
    {
      role: "system",
      content: `You are a system that decides what is going to be the following action in a conversation. 
You can only reply by using one of the following codes in caps: SEARCH_KNOWLEDGE_BASE, CREATE_INCIDENT, CREATE_SERVICE_TICKET
You cannot give any explanation in your response, this is going to be handled by other agents.
The conversation needs to have a few messages before creating incidents or service tickets.

The actions should be used as follows:
\`\`\`
code: SEARCH_KNOWLEDGE_BASE
condition: This should be the response in case we could try to search in the knowledge base.

code: CREATE_INCIDENT
condition: This should be the response in case there is an issue that cannot be simply answered and requires action, like a system crash, a bug, etc.

code: CREATE_SERVICE_TICKET
condition: This should be the response in case the user wants to change its password.
\`\`\``,
    },
    ...messages,
    {
      role: "user",
      content: `Remember that:
You can only reply by using one of the following codes in caps: SEARCH_KNOWLEDGE_BASE, CREATE_INCIDENT, CREATE_SERVICE_TICKET
You cannot give any explanation in your response, this is going to be handled by other agents.
The conversation needs to have a few messages before creating incidents or service tickets.`,
    },
  ]);
}

export async function getFAQApplicableQuestions(messages: IMessage[]) {
  const sendMessages = [
    {
      role: "system",
      content: `You are an assistant that has to decide what information should be retrieved from the list.

IMPORTANT:
- You always reply in JSON format with a list of numbers.
- This is an example of the response you can give: [1, 2, 3].
- The numbers should point to the items on the list that could apply to answer to the conversation.
- Avoid giving any text explanation

List:
\`\`\`
${faq.map((q) => `${q.id}: ${q.question}`).join("\n")}
\`\`\``,
    },
    ...messages,
    {
      role: "user",
      content: `Remember that:
- You always reply in JSON format with a list of numbers.
- This is an example of the response you can give: [1, 2, 3].
- The numbers should point to the items on the list that could apply to answer to the conversation.
- Avoid giving any text explanation`,
    },
  ] as IMessage[];

  const reply = await chatCompletion(sendMessages);

  console.log("getFAQApplicableQuestions", sendMessages, reply);

  if (!reply) return null;

  const questionsIndex = JSON.parse(reply) as number[];

  return faq.filter((q) => questionsIndex.includes(parseInt(q.id, 10)));
}

export async function getChatReply(context: string, messages: IMessage[]) {
  return chatCompletion([
    {
      role: "system",
      content: `You are an assistant tasked with replying to the conversation by using the information in the current chat, and also the context provided below.

In case you are missing information in order to reply, ask for clarifications on the question to the user.

You reply using Markdown.

The context information has a number before every question. Whenever you are quoting any of the information of the context, you should add the number you are quoting to the end of the quote, as a markdown link pointing to: [{number}](/faq/#faq-{number})

Context:
\`\`\`
${context}
\`\`\``,
    },
    ...messages,
  ]);
}
