"use client";
import React from "react";
import { useState } from "react";
import { Typography, Box, TextField, Button, IconButton } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { createMovie } from "../../../../lib/redux/slices/movieSlice/movieThunk";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const CreateMovieForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#093545",
        margin: 0,
        padding: 0,
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: 600,
          color: "#FFFFFF",
          padding: 10,
        }}
      >
        Create a new movie
      </Typography>

      <Box sx={{ display: "flex", gap: 10 }}>
        <Box sx={{ ml: 10, position: "relative" }}>
          {selectedImage ? (
            <>
              <Image src={selectedImage} width={350} height={450} />
              <IconButton
                onClick={handleRemoveImage}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#2BD17E",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </>
          ) : (
            <label htmlFor="image-upload">
              <Image src="/Group35.png" width={350} height={450} />
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </label>
          )}
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
            <Button
              sx={{
                width: "170px",
                border: "1px solid #FFFFFF",
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
              }}
            >
              Cancel
            </Button>

            <Button
              sx={{
                width: "170px",
                border: "1px solid #FFFFFF",
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
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateMovieForm;
