import { Box, Skeleton } from "@mui/material";

export function SkeletonChatMessage() {
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
      <Skeleton variant="circular" sx={{ width: 44, height: 40, mr: 2 }} />
      <Box sx={{ width: "100%", marginTop: "8px" }}>
        <Skeleton animation="wave" height={20} width="80%" />
        <Skeleton animation="wave" height={20} width="60%" />
      </Box>
    </Box>
  );
}
