import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  SelectChangeEvent,
  Box,
  Typography,
} from "@mui/material";

interface CreateTicketFormProps {
  onSubmit?: (type: string, summary: string, description: string) => void;
  onCancel?: () => void;
}

export function CreateTicketForm(props: CreateTicketFormProps) {
  const [type, setType] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleTypeChange = React.useCallback((event: SelectChangeEvent) => {
    setType(event.target.value);
  }, []);

  const handleSummaryChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSummary(event.target.value);
    },
    []
  );

  const handleDescriptionChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    },
    []
  );

  const handleSubmit = React.useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      if (type && summary && description) {
        props.onSubmit?.(type, summary, description);
        setType("");
        setSummary("");
        setDescription("");
      }
    },
    [props.onSubmit, type, summary, description]
  );

  const handleCancel = React.useCallback(() => {
    setType("");
    setSummary("");
    setDescription("");

    props.onCancel?.();
  }, [props.onCancel]);

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h3" color="black" mb={4}>
        New Ticket
      </Typography>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          labelId="type-label"
          value={type}
          label="Type"
          onChange={handleTypeChange}
        >
          <MenuItem value="CHANGE_PASSWORD">Change Password</MenuItem>
          <MenuItem value="SYSTEM_CRASH">System Crash</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Summary"
        value={summary}
        onChange={handleSummaryChange}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={handleDescriptionChange}
        sx={{ marginBottom: 2 }}
      />

      <Box sx={{ display: "flex", placeContent: "flex-end" }}>
        <Button variant="contained" type="submit" sx={{ marginRight: 2 }}>
          Submit
        </Button>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </form>
  );
}
