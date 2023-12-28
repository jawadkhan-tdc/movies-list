import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

const CreateMovieForm = () => {
  return (
    <Box sx={{ backgroundColor: "#093545", height: "100vh" }}>
      <Typography>Create a new movie</Typography>

      <Box sx={{ display: "flex", gap: 10 }}>
        <Box>
          <Typography>Drop an Image Here</Typography>
        </Box>
        <Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              placeholder="Title"
              sx={{
                width: "100%",
                border: "1px solid rgba(38, 39, 41, 0.1)",
                backgroundColor: "#224957",
                borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "unset",
                },
                "& input": {
                  color: "#FFFFFF",
                },
                "& input::placeholder": {
                  color: "#FFFFFF",
                },
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              placeholder="Publishing year"
              sx={{
                width: "100%",
                border: "1px solid rgba(38, 39, 41, 0.1)",
                backgroundColor: "#224957",
                borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "unset",
                },
                "& input": {
                  color: "#FFFFFF",
                },
                "& input::placeholder": {
                  color: "#FFFFFF",
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button>Cancel</Button>
            <Button>Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateMovieForm;
