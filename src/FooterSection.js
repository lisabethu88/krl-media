/**
 * FooterSection Component
 *
 * This component serves as the footer for a webpage, designed to engage users
 * and encourage interaction. It includes the following features:
 *
 * - A sign-up form for receiving updates about marketing and creative ideas.
 *   - Includes a styled email input field and a circular "Yes!" submit button (not yet functional).
 * - Contact information displayed prominently for users to reach out.
 *   - Email address is highlighted with custom styling.
 * - Social media icons (Facebook and Pinterest) with accent colors for branding.
 * - A responsive layout centered both horizontally and vertically, with consistent spacing and alignment.
 * - Styled using Material-UI (MUI) components with custom typography, color palette, and font styles for a cohesive design.
 *
 */

import React from "react";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

function FooterSection() {
  return (
    <Box
      id="contact"
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
          gap: 1,
          maxWidth: 500,
          marginY: "1rem",
          textAlign: "center",
          color: "#68a7a0",
        }}
      >
        <Typography fontStyle="italic" fontSize={20}>
          <b>Sign up</b>{" "}
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography>
          for news about marketing and other creative ideas
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            sx={{
              "& .MuiInputBase-input": {
                fontFamily: "Lexend",
              },
              "& .MuiInputLabel-root": {
                fontFamily: "Lexend",
              },
            }}
          />
          {/* submit button not functional */}
          <Button
            type="submit"
            sx={{
              backgroundColor: "#314353",
              height: 75,
              width: 75,
              borderRadius: "100%",
              color: "#fcf4e9",
              fontStyle: "italic",
              textTransform: "capitalize",
              fontSize: 25,
            }}
          >
            <b>Yes!</b>
          </Button>
        </Box>
        <Box textAlign={"center"}>
          <Typography fontStyle="italic" fontSize={20}>
            <b>Say hello!</b>
          </Typography>
          <Typography fontStyle="italic" color={"#314353"}>
            krl@krlmedia.com
          </Typography>
        </Box>
        <Box>
          <FacebookIcon sx={{ color: "#d96a48" }} />
          <PinterestIcon sx={{ color: "#d96a48" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default FooterSection;
