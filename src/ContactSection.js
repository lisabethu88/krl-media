/**
 * ContactSection Component
 *
 * This component renders a "Contact Us" section, allowing users to fill out
 * a form to send their inquiries or messages. It includes:
 * - A responsive layout using Material-UI (MUI) Grid2 and Box components.
 * - Input fields for Name, Email, and Message with styling for a polished UI.
 * - Form state management using React's `useState` hook.
 * - A submit handler to process the form data (currently logs to the console).
 *
 */
import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid2 } from "@mui/material";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <Box
      sx={{
        paddingX: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component="h1" fontSize="2.125rem" gutterBottom>
        Contact Us
      </Typography>

      <Grid2 container spacing={4}>
        {/* Contact Form Section */}
        <Grid2 item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Lexend",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Lexend",
                },
              }}
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Lexend",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Lexend",
                },
              }}
              fullWidth
              label="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Lexend",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Lexend",
                },
              }}
              fullWidth
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: 2,
                backgroundColor: "#d96a48",
                fontFamily: "Lexend",
              }}
            >
              Submit
            </Button>
          </form>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ContactSection;
