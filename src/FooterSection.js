import React from "react";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

function FooterSection() {
  return (
    <Box
      component={"footer"}
      sx={{
        flexShrink: 0,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          gap: 2,
          maxWidth: 500,
          marginY: "1rem",
        }}
      >
        <Typography fontStyle="italic">Sign up </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography>
          for news about marketing and other creative ideas
        </Typography>
        <Box>
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
          />
          <Button type="submit">Yes!</Button>
        </Box>
        <Box textAlign={"center"}>
          <Typography fontStyle="italic">Say hello!</Typography>
          <Typography fontStyle="italic">krl@krlmedia.com</Typography>
        </Box>
        <Box>
          <FacebookIcon />
          <PinterestIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default FooterSection;
