import ReactMarkdown from "react-markdown";
import { Box } from "@mui/material";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent(props: MarkdownContentProps) {
  return (
    <Box
      sx={{
        "& p": {
          marginBottom: "12px",
          fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
          fontWeight: "400",
          fontSize: "1rem",
          lineHeight: "1.5",
          letterSpacing: "0.00938em",
          color: "black",
        },
        "& ul": {
          paddingLeft: "14px",
          marginBottom: "12px",
          color: "black",
        },
        "& li": {
          fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
          fontWeight: "400",
          fontSize: "1rem",
          lineHeight: "1.5",
          letterSpacing: "0.00938em",
          color: "black",
        },
        "& a": {
          color: "#1976d2",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            color: "black",
          },
        },
      }}
    >
      <ReactMarkdown>{props.content}</ReactMarkdown>
    </Box>
  );
}
