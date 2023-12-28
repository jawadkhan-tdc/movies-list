"use client";
import React from "react";
import { Typography, Box, TextField, Checkbox, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

  const router = useRouter();

  const handleOnAccount = () => {
    router.push('/');
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#093545",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: "64px", color: "white", fontWeight: 600 }}>
        Sign Up
      </Typography>
      <Box sx={{ mt: 5, width: "300px" }}>
        <Box sx={{ mb: 2 }}>
          <TextField
            placeholder="Full Name"
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
            placeholder="Email"
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
            placeholder="Password"
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
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Checkbox
          sx={{
            "& .MuiCheckbox-root": {
              borderRadius: "10px",
              border: "none",
            },
          }}
        />
        <Typography sx={{ color: "#FFFFFF" }}>Remember me</Typography>
      </Box>
      <Button
        sx={{
          width: "303px",
          borderRadius: "10px",
          backgroundColor: "#2BD17E",
          color: "white",
          mt: 2,
          height: "54px",
          fontSize: "18px",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "#2BD17E",
          },
          "&:active": {
            backgroundColor: "#2BD17E8",
          },
        }}
        onClick={handleOnAccount}
      >
        Signup
      </Button>
    </Box>
  );
};

export default RegisterForm;
