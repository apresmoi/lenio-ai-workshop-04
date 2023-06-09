import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

interface AppHeaderProps {
  children?: React.ReactNode;
}

export function AppHeader(props: AppHeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Workshop 04 - FAQ
          </Typography>
        </Link>
        <Box sx={{ marginLeft: "auto" }}>{props.children}</Box>
      </Toolbar>
    </AppBar>
  );
}
