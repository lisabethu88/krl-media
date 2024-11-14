import { Box, Divider } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

function MainTextSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        maxWidth: 500,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4" textTransform={"uppercase"}>
          Hi there!{" "}
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography variant="body">
          We are a team of Graphic Designers, UX designers and Web Developers
          with years of experience working independently with artists, creative
          thinkers, non-profits and small businesses. We have clients all over
          the world and have successfully launched businesses for satisfied and
          happy customers. We are passionate about helping people and companies
          present the best sides of them- selves. Logos and branding stay a
          while websites and launches printed and digital
        </Typography>
      </Box>
      <Box display="flex" flexDirection={"column"} gap={4}>
        <Divider orientation="horizontal" flexItem />

        <Typography variant="h4" textTransform={"uppercase"}>
          Stay a while
        </Typography>

        <Box
          display={"flex"}
          gap={4}
          textTransform={"uppercase"}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box color="#d96a48">
            <CircleIcon sx={{ marginBottom: 2 }} />
            <Typography>Logos and branding </Typography>
          </Box>
          <Box color="#68a7a0">
            <CircleIcon sx={{ marginBottom: 2 }} />
            <Typography>websites and launches</Typography>
          </Box>
          <Box color="#e7b454">
            <CircleIcon sx={{ marginBottom: 2 }} />
            <Typography>printed and digital</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainTextSection;
