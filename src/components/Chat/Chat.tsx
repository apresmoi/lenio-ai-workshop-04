import { IMessage } from "@/types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import { SkeletonChatMessage } from "./SkeletonChatMessage";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import React from "react";

interface IChatProps {
  messages: IMessage[];
  loading?: boolean;
  onNewMessage?: (message: string) => void;
}

export function Chat(props: IChatProps) {
  const handleNewMessage = React.useCallback(
    (message: string) => {
      if (props.onNewMessage) {
        props.onNewMessage(message);
      }
    },
    [props.onNewMessage]
  );

  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        width: "600px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          maxWidth: "600px",
          height: "100%",
          paddingRight: "10px",
          overflowY: "scroll",
        }}
      >
        <Box>
          {props.messages.map((message, i) => (
            <ChatMessage key={`message-${i}`} {...message} />
          ))}
          {props.loading && <SkeletonChatMessage />}
        </Box>
      </Box>
      <ChatInput onSubmit={handleNewMessage} />
    </Box>
  );
}
