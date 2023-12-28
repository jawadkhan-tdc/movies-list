import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import Image from "next/image";

const CreateMovieForm = () => {
  return (
    <Box sx={{ backgroundColor: "#093545", height: "100vh" }}>
      <Typography sx={{ fontSize: "48px", fontWeight: 600, color: "#FFFFFF", padding: 12 }}>Create a new movie</Typography>

      <Box sx={{ display: "flex", gap: 10 }}>
        <Box sx={{ ml: 12 }}>
          <Image
            src="/Group35.png"
            width={400}
            height={500}
          />
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
                width: "80%",
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
            <Button sx={{
              width: "170px",
              border : "1px solid #FFFFFF",
              borderRadius: "10px",
              backgroundColor: "#2BD17E",
              color: "white",
              mt: 2,
              height: "54px",
              fontSize: "18px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#2BD17E",
                border: "none",
              },
              "&:active": {
                backgroundColor: "#2BD17E8",
              },
            }}>Cancel</Button>

            <Button  sx={{
            width: "170px",
              border : "1px solid #FFFFFF",
            borderRadius: "10px",
            backgroundColor: "#2BD17E",
            color: "white",
            mt: 2,
            height: "54px",
            fontSize: "18px",
            textTransform: "capitalize",
            "&:hover": {
                backgroundColor: "#2BD17E",
                border: "none",
            },
            "&:active": {
                backgroundColor: "#2BD17E8",
            },
        }}>Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateMovieForm;
