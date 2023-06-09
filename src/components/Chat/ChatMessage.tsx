import { IMessage } from "@/types";
import { Avatar, Box, Typography } from "@mui/material";
import { MarkdownContent } from "../MarkdownContent";

export function ChatMessage(props: IMessage) {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      mb={1}
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "8px",
      }}
    >
      <Avatar sx={{ mr: 2 }}>{props.role[0].toUpperCase()}</Avatar>
      <Box sx={{ width: "100%", marginTop: "8px" }}>
        {props.role === "assistant" && (
          <MarkdownContent content={props.content} />
        )}
        {props.role === "user" && (
          <Typography variant="body1" gutterBottom color="black">
            {props.content}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
