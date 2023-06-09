import React from "react";
import { Container } from "@mui/material";
import { AppHeader } from "@/components/AppHeader";
import { CreateTicketForm } from "@/components/CreateTicketForm";

function createTicket(type: string, summary: string, description: string) {
  return fetch("/api/create-ticket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type,
      summary,
      description,
    }),
  });
}

export default function Home() {
  const handleSubmit = React.useCallback(
    (type: string, summary: string, description: string) => {
      console.log({ type, summary, description });
      if (type && summary && description) {
        createTicket(type, summary, description);
        window.location.href = "/";
      }
    },
    []
  );

  return (
    <>
      <AppHeader />
      <Container sx={{ paddingTop: "20px" }}>
        <CreateTicketForm
          onSubmit={handleSubmit}
          onCancel={() => (window.location.href = "/")}
        />
      </Container>
    </>
  );
}
