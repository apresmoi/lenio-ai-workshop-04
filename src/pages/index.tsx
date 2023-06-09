import { FAQ } from "../components/FAQ";
import { Button, Container } from "@mui/material";
import { AppHeader } from "@/components/AppHeader";
import { faq } from "@/utils/faq";

export default function Home() {
  return (
    <>
      <AppHeader>
        <Button href="/create-ticket" color="inherit">Crear un Ticket</Button>
      </AppHeader>
      <Container sx={{ paddingTop: "20px" }}>
        <FAQ questions={faq} />
      </Container>
    </>
  );
}
