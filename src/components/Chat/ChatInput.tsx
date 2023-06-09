import React from "react";
import { TextField, Box, InputAdornment, Button } from "@mui/material";
import {
  HelpCenter as HelpOutlineIcon,
  Send as SendIcon,
} from "@mui/icons-material";

interface ChatInputProps {
  onSubmit?: (value: string) => void;
}

export function ChatInput(props: ChatInputProps) {
  const [value, setValue] = React.useState<string>("");

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  const handleSubmit = React.useCallback(() => {
    if (props.onSubmit) {
      props.onSubmit(value);
    }
    setValue("");
  }, [props.onSubmit, value]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        paddingRight: "8px",
      }}
    >
      <TextField
        multiline
        placeholder=""
        variant="outlined"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sx={{
          width: "100%",
          borderRadius: "12px",
        }}
        InputProps={{
          placeholder: "Hello FlowX! I need information about...",
          startAdornment: (
            <InputAdornment position="start">
              <HelpOutlineIcon sx={{ opacity: 0.6 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  width: "32px",
                  height: "32px",
                  minWidth: "unset",
                  minHeight: "unset",
                  padding: 0,
                }}
                onClick={handleSubmit}
              >
                <SendIcon />
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
