import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import { Link } from "@mui/icons-material";
import { MarkdownContent } from "./MarkdownContent";

interface FAQProps {
  questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export const FAQ = (props: FAQProps) => {
  const [expanded, setExpanded] = React.useState<string | false>("");

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#faq-", "");
      setExpanded(id);
    }
  }, []);

  const handleChange = React.useCallback(
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    },
    []
  );

  const handleLinkCopy = React.useCallback((id: string) => {
    return (e: React.SyntheticEvent) => {
      e.stopPropagation();
      setExpanded(id);
      try {
        navigator.clipboard
          .writeText(window.location.host + `/faq/#faq-${id}`)
          .then(() => {
            console.log("Text copied to clipboard");
          })
          .catch((error) => {
            console.error("Unable to copy text to clipboard:", error);
          });
      } catch (e) {}
    };
  }, []);

  return (
    <Box sx={{ maxHeight: "calc(100vh - 100px)", overflowY: "scroll" }}>
      <Box sx={{}}>
        {props.questions.map((faq) => (
          <Accordion
            id={`faq-${faq.id}`}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
            sx={{
              "&.Mui-expanded": {
                marginTop: "2px",
                marginBottom: "2px",
              },
            }}
          >
            <AccordionSummary
              key={faq.id}
              sx={{
                display: "flex",
                "& .Mui-expanded .MuiTypography-root": {},
              }}
            >
              <Typography sx={{ margin: "auto 0", fontWeight: "bold" }}>
                {faq.question}
              </Typography>
              <IconButton
                sx={{ marginLeft: "auto" }}
                onClick={handleLinkCopy(faq.id)}
              >
                <Link />
              </IconButton>
            </AccordionSummary>
            <AccordionDetails>
              <MarkdownContent content={faq.answer} />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
