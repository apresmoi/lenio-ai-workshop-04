import React from "react";
import axios from "axios";
import { Container } from "@mui/material";
import { AppHeader } from "@/components/AppHeader";
import { Chat } from "@/components/Chat";
import { IMessage } from "@/types";

export default function Home() {
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleNewMessage = React.useCallback(
    (content: string) => {
      const newMessages = [
        ...messages,
        { role: "user", content },
      ] as IMessage[];

      setLoading(true);
      setMessages(newMessages);

      axios
        .post("/api/chat", {
          messages: newMessages,
        })
        .then((reply) => {
          setMessages(reply.data as IMessage[]);
          setLoading(false);
        });
    },
    [messages]
  );

  return (
    <>
      <AppHeader></AppHeader>
      <Container sx={{ paddingTop: "20px" }}>
        <Chat
          messages={messages}
          loading={loading}
          onNewMessage={handleNewMessage}
        />
      </Container>
    </>
  );
}
